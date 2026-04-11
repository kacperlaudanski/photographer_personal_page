'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

import { TransitionPhase } from '@/enums';
import { PageTransitionContextValue } from '@/interfaces';

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

export const PageTransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }): React.JSX.Element => {
  const [phase, setPhase] = useState<TransitionPhase>(TransitionPhase.Idle);
  const [destinationPath, setDestinationPath] = useState<string>('');
  const router: ReturnType<typeof useRouter> = useRouter();
  const pathname: string = usePathname();
  const pendingHref: React.RefObject<string | null> = useRef<string | null>(null);
  const phaseRef: React.RefObject<TransitionPhase> = useRef<TransitionPhase>(phase);
  phaseRef.current = phase;

  useEffect((): void => {
    if (phaseRef.current === TransitionPhase.Navigating) {
      setPhase(TransitionPhase.Uncovering);
    }
  }, [pathname]);

  useEffect((): (() => void) | void => {
    if (phase === TransitionPhase.Navigating) {
      const timer: NodeJS.Timeout = setTimeout((): void => {
        setPhase(TransitionPhase.Uncovering);
      }, 400);

      return (): void => clearTimeout(timer);
    }
  }, [phase]);

  const navigate = useCallback((href: string): void => {
    if (phase !== TransitionPhase.Idle) {
      return;
    }

    pendingHref.current = href;
    setDestinationPath(href);
    setPhase(TransitionPhase.Covering);
  }, [phase]);

  const onCoverComplete = useCallback((): void => {
    if (pendingHref.current) {
      router.push(pendingHref.current);
      pendingHref.current = null;
    }

    setPhase(TransitionPhase.Navigating);
  }, [router]);

  const onUncoverComplete = useCallback((): void => {
    setPhase(TransitionPhase.Idle);
  }, []);

  return (
    <PageTransitionContext.Provider value={{ phase, destinationPath, navigate, onCoverComplete, onUncoverComplete }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = (): PageTransitionContextValue => {
  const ctx: PageTransitionContextValue | null = useContext(PageTransitionContext);

  if (!ctx) {
    throw new Error('usePageTransition must be used within PageTransitionProvider');
  }

  return ctx;
};
