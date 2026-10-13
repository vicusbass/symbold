// Safari draws the incoming page of a view transition from its own rendering, which can run ahead
// of CSS transitions on the live page. A reveal animation started during the transition then flashes
// in, disappears when the transition ends, and animates in a second time. Reveal animations wait
// for the transition to finish instead.

let transitionFinished: Promise<unknown> = Promise.resolve();

document.addEventListener('astro:before-swap', (event) => {
  transitionFinished = event.viewTransition.finished.catch(() => {});
});

/** Resolves once the current page transition has finished (immediately on full page loads). */
export function afterViewTransition(): Promise<unknown> {
  return transitionFinished;
}
