/**
 * Optional Motion runtime for UFKORA's static HTML/JavaScript pages.
 *
 * Import this helper only in features that need advanced animations:
 *   import { loadMotion } from "../shared/motion-runtime.js";
 *   const motion = await loadMotion();
 *   if (motion) motion.animate(element, { opacity: [0, 1] }, { duration: 0.3 });
 *
 * No React, npm build or automatic changes to existing animations required.
 */
const MOTION_CDN_URL = "https://cdn.jsdelivr.net/npm/motion@14.9.0/+esm";
let motionPromise;

export function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function loadMotion() {
  if (typeof document === "undefined" || prefersReducedMotion()) {
    return Promise.resolve(null);
  }

  if (!motionPromise) {
    motionPromise = import(MOTION_CDN_URL).catch((error) => {
      motionPromise = undefined;
      console.warn("[UFKORA] Motion could not load; existing interactions remain available.", error);
      return null;
    });
  }

  return motionPromise;
}
