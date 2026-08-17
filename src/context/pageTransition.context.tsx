'use client';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { PageCurtain } from '@/components';
import { TransitionPhase } from '@/enums';
import { PageTransitionContextValue } from '@/interfaces';

const PageTransitionContext = createContext<PageTransitionContextValue | null>(null);

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const [phase, setPhase] = useState(TransitionPhase.Idle);
  const [destinationPath, setDestinationPath] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const pendingHref = useRef<string | null>(null);
  const [trackedPathname, setTrackedPathname] = useState(pathname);

  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    if (phase === TransitionPhase.Navigating) {
      setPhase(TransitionPhase.Uncovering);
    }
  }

  useEffect(() => {
    if (phase === TransitionPhase.Navigating) {
      const timer: NodeJS.Timeout = setTimeout(() => {
        setPhase(TransitionPhase.Uncovering);
      }, 400);

      return (): void => clearTimeout(timer);
    }
  }, [phase]);

  const navigate = useCallback((href: string) => {
    if (phase !== TransitionPhase.Idle) {
      return;
    }

    pendingHref.current = href;
    setDestinationPath(href);
    setPhase(TransitionPhase.Covering);
  }, [phase]);

  const onCoverComplete = useCallback(() => {
    if (pendingHref.current) {
      router.push(pendingHref.current);
      pendingHref.current = null;
    }

    setPhase(TransitionPhase.Navigating);
  }, [router]);

  const onUncoverComplete = useCallback(() => {
    setPhase(TransitionPhase.Idle);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    if (phase === TransitionPhase.Covering) {
      onCoverComplete();
    } else if (phase === TransitionPhase.Uncovering) {
      onUncoverComplete();
    }
  }, [phase, onCoverComplete, onUncoverComplete]);

  const contextValue = useMemo(
    () => ({ phase, destinationPath, navigate, onCoverComplete, onUncoverComplete }),
    [phase, destinationPath, navigate, onCoverComplete, onUncoverComplete]
  );

  return (
    <PageTransitionContext.Provider value={contextValue}>
      <PageCurtain phase={phase} destinationPath={destinationPath} onAnimationComplete={handleAnimationComplete} />
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const ctx = useContext(PageTransitionContext);

  if (!ctx) {
    throw new Error('usePageTransition must be used within PageTransitionProvider');
  }

  return ctx;
};
