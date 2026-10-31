// Site-wide motion, driven by data attributes so pages stay plain HTML:
//
//   data-stagger         children rise in one after another on page load
//   data-reveal          element rises in once when scrolled into view
//   data-countup="80"    number counts up from 0 when in view (keeps any prefix/suffix text)
//   data-copy="text"     click copies text; element briefly shows "Copied"
//   data-draw            element scales in along Y as the page scrolls past it (timeline lines)
//
// Everything is skipped when html.motion is absent (reduced motion), except copy.

import { animate, inView, scroll, stagger } from 'motion';

const ease = [0.22, 1, 0.36, 1] as const;
const rise = { opacity: [0, 1], transform: ['translateY(10px)', 'translateY(0px)'] };

function motionAllowed() {
  return document.documentElement.classList.contains('motion');
}

function initStagger() {
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    animate(Array.from(group.children), rise, {
      duration: 0.5,
      delay: stagger(0.06),
      ease,
    });
  });
}

function initReveal() {
  inView(
    '[data-reveal]',
    (el) => {
      animate(el, rise, { duration: 0.6, ease });
    },
    { margin: '0px 0px -10% 0px' },
  );
}

function initCountUp() {
  inView('[data-countup]', (el) => {
    const target = Number((el as HTMLElement).dataset.countup);
    const text = el.textContent ?? '';
    const [prefix, suffix] = text.split(String(target));
    animate(0, target, {
      duration: 1.2,
      ease,
      onUpdate: (v) => {
        el.textContent = `${prefix ?? ''}${Math.round(v)}${suffix ?? ''}`;
      },
    });
  });
}

function initDraw() {
  document.querySelectorAll<HTMLElement>('[data-draw]').forEach((el) => {
    el.style.transformOrigin = 'top';
    scroll(animate(el, { transform: ['scaleY(0)', 'scaleY(1)'] }, { ease: 'linear' }), {
      target: el,
      offset: ['start 85%', 'end 60%'],
    });
  });
}

function initCopy() {
  document.querySelectorAll<HTMLElement>('[data-copy]').forEach((el) => {
    if (el.dataset.copyBound) return;
    el.dataset.copyBound = 'true';
    const label = el.querySelector<HTMLElement>('[data-copy-label]') ?? el;
    el.addEventListener('click', async (event) => {
      event.preventDefault();
      await navigator.clipboard.writeText(el.dataset.copy!);
      const original = label.textContent;
      label.textContent = 'Copied';
      setTimeout(() => (label.textContent = original), 1400);
    });
  });
}

let spotlightBound = false;
function initSpotlight() {
  if (spotlightBound) return;
  spotlightBound = true;
  window.addEventListener(
    'pointermove',
    (event) => {
      const root = document.documentElement.style;
      root.setProperty('--x', `${event.clientX}px`);
      root.setProperty('--y', `${event.clientY}px`);
    },
    { passive: true },
  );
}

// Runs on first load and after every client-side navigation.
document.addEventListener('astro:page-load', () => {
  initCopy();
  if (!motionAllowed()) return;
  initStagger();
  initReveal();
  initCountUp();
  initDraw();
  initSpotlight();
});
