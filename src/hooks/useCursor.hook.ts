'use client';
import { useEffect, useEffectEvent, useRef, useState } from 'react';

import { cursorVariant } from '@/consts';
import { usePageTransition } from '@/context';
import { CursorVariant, TransitionPhase } from '@/enums';
import { Coordinates } from '@/interfaces';

import { useHasFinePointer } from './useHasFinePointer.hook';

const MAGNETIC_STRENGTH = 0.35;

const isCursorVariant = (value: string | undefined): value is CursorVariant => !!value && Object.hasOwn(cursorVariant, value);

export const useCursor = (lerp = 0.17) => {
  const { phase } = usePageTransition();
  const isTransitioning = phase !== TransitionPhase.Idle;
  const getMagneticTarget = useEffectEvent(() => isTransitioning ? null : magneticTargetRef.current);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef(0);
  const initializedRef = useRef(false);
  const magneticTargetRef = useRef<Element | null>(null);

  const [variant, setVariant] = useState(CursorVariant.Default);
  const [label, setLabel] = useState<string | null>(null);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isEnabled = useHasFinePointer();

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const mouseCoords: Coordinates = { x: 0, y: 0 };
    const ringCoords: Coordinates = { x: 0, y: 0 };

    const onMove = (event: MouseEvent) => {
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

    const onDown = () => setIsPressed(true);
    const onUp = () => setIsPressed(false);

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

    const getRingTarget = () => {
      const magneticTarget = getMagneticTarget();

      if (!magneticTarget) {
        return mouseCoords;
      }

      const rect = magneticTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      return {
        x: mouseCoords.x + (centerX - mouseCoords.x) * MAGNETIC_STRENGTH,
        y: mouseCoords.y + (centerY - mouseCoords.y) * MAGNETIC_STRENGTH,
      };
    };


    const animate = () => {
      if (initializedRef.current) {
        const target = getRingTarget();
        const deltaX = target.x - ringCoords.x;
        const deltaY = target.y - ringCoords.y;
        const isSettled = Math.abs(deltaX) < 0.1 && Math.abs(deltaY) < 0.1;
      
        if (!isSettled && ringRef.current) {
          ringCoords.x += deltaX * lerp;
          ringCoords.y += deltaY * lerp;
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

  return {
    dotRef,
    ringRef,
    variant: isTransitioning ? CursorVariant.Default : variant,
    label: isTransitioning ? null : label,
    isPressed,
    isVisible,
    isEnabled,
  };
};
