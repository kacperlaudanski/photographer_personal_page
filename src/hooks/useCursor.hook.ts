'use client';
import { RefObject, useEffect, useRef, useState, useSyncExternalStore } from 'react';

import { Coordinates } from '@/interfaces';
import { CursorVariant } from '@/enums';
import { cursorVariant } from '@/consts';

const FINE_POINTER_QUERY = '(pointer: fine)';
const MAGNETIC_STRENGTH = 0.35;

const cursorVariantValues: string[] = Object.values(CursorVariant);

const isCursorVariant = (value: string | undefined): value is CursorVariant => (
  !!value && cursorVariantValues.includes(value)
);

const subscribeToPointer = (onChange: () => void): () => void => {
  const mediaQuery: MediaQueryList = window.matchMedia(FINE_POINTER_QUERY);
  mediaQuery.addEventListener('change', onChange);

  return (): void => mediaQuery.removeEventListener('change', onChange);
};

const getHasFinePointer = (): boolean => window.matchMedia(FINE_POINTER_QUERY).matches;

const getServerSnapshot = () => false;

export const useCursor = (lerp: number = 0.17) => {
  const dotRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const ringRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const rafRef: RefObject<number> = useRef<number>(0);
  const initializedRef: RefObject<boolean> = useRef<boolean>(false);
  const magneticTargetRef: RefObject<Element | null> = useRef<Element>(null);

  const [variant, setVariant] = useState<CursorVariant>(CursorVariant.Default);
  const [label, setLabel] = useState<string | null>(null);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const isEnabled: boolean = useSyncExternalStore(subscribeToPointer, getHasFinePointer, getServerSnapshot);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const mouseCoords: Coordinates = { x: 0, y: 0 };
    const ringCoords: Coordinates = { x: 0, y: 0 };

    const onMove: (event: MouseEvent) => void = (event: MouseEvent): void => {
      mouseCoords.x = event.clientX;
      mouseCoords.y = event.clientY;

      if (!initializedRef.current) {
        ringCoords.x = mouseCoords.x;
        ringCoords.y = mouseCoords.y;
        initializedRef.current = true;
        setIsVisible(true);
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseCoords.x}px, ${mouseCoords.y}px)`;
      }
    };

    const onOver = (event: PointerEvent) => {
      const target: EventTarget | null = event.target;
      const element: Element | null = target instanceof Element ? target.closest('[data-cursor]') : null;
      const cursorElement: HTMLElement | null = element instanceof HTMLElement ? element : null;

      const nextVariant: CursorVariant = isCursorVariant(cursorElement?.dataset.cursor)
        ? cursorElement.dataset.cursor
        : CursorVariant.Default;
      
      setVariant(nextVariant);
      setLabel(cursorElement?.dataset.cursorLabel ?? cursorVariant[nextVariant].label ?? null);
      magneticTargetRef.current = cursorVariant[nextVariant].magnetic ? element : null;
    };

    const onDown = (): void => setIsPressed(true);
    const onUp = (): void => setIsPressed(false);

    const onWindowOut = (event: MouseEvent): void => {
      if (!event.relatedTarget) {
        setIsVisible(false);
      }
    };

    const onWindowOver = (): void => {
      if (initializedRef.current) {
        setIsVisible(true);
      }
    };

    const getRingTarget = (): Coordinates => {
      const magneticTarget: Element | null = magneticTargetRef.current;

      if (!magneticTarget) {
        return mouseCoords;
      }

      const rect: DOMRect = magneticTarget.getBoundingClientRect();
      const centerX: number = rect.left + rect.width / 2;
      const centerY: number = rect.top + rect.height / 2;

      return {
        x: mouseCoords.x + (centerX - mouseCoords.x) * MAGNETIC_STRENGTH,
        y: mouseCoords.y + (centerY - mouseCoords.y) * MAGNETIC_STRENGTH,
      };
    };


    const animate = () => {
      if (initializedRef.current) {
        const target: Coordinates = getRingTarget();
        ringCoords.x += (target.x - ringCoords.x) * lerp;
        ringCoords.y += (target.y - ringCoords.y) * lerp;
      
        if (ringRef.current) {
          ringRef.current.style.transform = `translate(${ringCoords.x}px, ${ringCoords.y}px)`;
        }
      }
      
      rafRef.current = requestAnimationFrame(animate);
    }
    
    window.addEventListener('mousemove', onMove);
    document.addEventListener('pointerover', onOver);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    document.addEventListener('mouseout', onWindowOut);
    document.addEventListener('mouseover', onWindowOver);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('pointerover', onOver);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('mouseout', onWindowOut);
      document.removeEventListener('mouseover', onWindowOver);
      cancelAnimationFrame(rafRef.current);
    } 
  }, [lerp, isEnabled]);

  return { dotRef, ringRef, variant, label, isPressed, isVisible, isEnabled };
};
