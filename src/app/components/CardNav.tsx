'use client';

import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  availabilityLabel?: string;
  contactLabel?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor = '#050505',
  availabilityLabel = 'Available',
  contactLabel = 'Contact',
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  // Initializing with an empty array of the correct type
  const cardsRef = useRef<HTMLDivElement[]>([]); 
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // ---
  // Fix 1: Wrap side-effect expression with an assignment or void 
  // to satisfy ESLint's no-unused-expressions rule
  // ---
  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        // Fix: Use 'void' keyword to explicitly indicate this expression's value is being ignored, 
        // satisfying the no-unused-expressions rule.
        void contentEl.offsetHeight; 

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  }, []); // calculateHeight doesn't depend on any state or props directly

  // ---
  // Fix 2: Wrap createTimeline in useCallback and add dependencies
  // to satisfy the exhaustive-deps rule for useLayoutEffect
  // ---
  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    // Ensure cardsRef.current is a clean array for GSAP
    const validCards = cardsRef.current.filter(Boolean);

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(validCards, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(validCards, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  }, [ease, calculateHeight]); // Dependencies of createTimeline

  // useLayoutEffect 1: Initialize and update timeline
  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items, createTimeline]); // Added createTimeline

  // useLayoutEffect 2: Handle resize
  useLayoutEffect(() => {
    const handleResize = () => {
      // Re-create the timeline logic is now safe because createTimeline is stable (via useCallback)
      // or will re-run when its dependencies change.
      if (!tlRef.current) return;

      // Kill the existing timeline for a clean recreation
      tlRef.current.kill(); 

      const newTl = createTimeline();

      if (isExpanded) {
        // If expanded, set the height immediately and play the new timeline to its end
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        // If not expanded, just update the timeline reference to the new one (height remains 60)
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded, createTimeline, calculateHeight]); // Added createTimeline and calculateHeight

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    // Only set if element is present to avoid creating null/undefined entries in the array initially
    if (el) cardsRef.current[i] = el;
    else delete cardsRef.current[i]; // Optionally clean up if a card is unmounted
  };

  return (
    <div
      className={`card-nav-container z-[99] w-full px-4 sm:px-6 md:px-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:w-[92%] md:max-w-[1000px] md:top-[2.6em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[62px] p-0 rounded-[2rem] shadow-[0_20px_80px_rgba(15,15,15,0.12)] relative overflow-hidden will-change-[height] border border-transparent bg-white`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[62px] flex items-center justify-between px-4 sm:px-6 z-[2] text-[0.65rem] uppercase tracking-[0.25em] text-neutral-600 md:text-[0.75rem] md:tracking-[0.3em]">
          <div className="flex items-center gap-3 text-[0.55rem] tracking-[0.25em] sm:text-[0.6rem] md:text-[0.65rem] md:gap-4">
            <span className="font-semibold text-neutral-900">Randey Giffary</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-[0.55rem] tracking-[0.25em] text-neutral-500 md:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {availabilityLabel}
            </span>
            <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {availabilityLabel}
            </span>
          </div>

          <div className="flex items-center gap-2 text-neutral-900 sm:gap-3">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden rounded-full border border-black/10 px-3 py-2 text-[0.55rem] font-semibold tracking-[0.25em] text-neutral-600 transition hover:border-black hover:text-black sm:px-4 sm:text-[0.6rem] md:block"
            >
              {contactLabel}
            </button>
            <div
              className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px]`}
              onClick={toggleMenu}
              role="button"
              aria-label={isExpanded ? 'Close menu' : 'Open menu'}
              tabIndex={0}
              style={{ color: menuColor }}
            >
              <div
                className={`hamburger-line w-[26px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                  isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
                } group-hover:opacity-50`}
              />
              <div
                className={`hamburger-line w-[26px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                  isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
                } group-hover:opacity-50`}
              />
            </div>
          </div>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[62px] bottom-0 p-5 flex flex-col items-stretch gap-3 justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-4`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-4 rounded-[1.5rem] border border-black/5 bg-white p-6 min-w-0 flex-[1_1_auto] h-auto min-h-[150px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{
                color: '#050505',
              }}
            >
              <div className="nav-card-label font-semibold tracking-tight text-[20px] md:text-[24px] flex items-center justify-between">
                {item.label}
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  0{idx + 1}
                </span>
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-2">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center justify-between gap-3 rounded-full border border-black/10 px-4 py-2 text-[14px] md:text-[15px] transition duration-300 hover:border-black hover:bg-black hover:text-white"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                      {lnk.label}
                    </span>
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-neutral-500">
                      Go
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;