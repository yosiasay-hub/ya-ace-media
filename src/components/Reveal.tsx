'use client';

import { useEffect, useRef, type ReactNode, type ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: 0 | 100 | 200 | 300 | 400;
  className?: string;
}

/**
 * IntersectionObserver-based reveal wrapper.
 * Adds .is-visible to .reveal once the element enters the viewport.
 * SSR-safe: starts in hidden state, JS upgrades it. With prefers-reduced-motion
 * the CSS forces it visible immediately.
 */
export function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            node.classList.add('is-visible');
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      data-delay={delay || undefined}
    >
      {children}
    </Tag>
  );
}
