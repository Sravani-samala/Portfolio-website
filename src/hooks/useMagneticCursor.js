import { useEffect } from "react";
import gsap from "gsap";

/**
 * useMagneticCursor
 *
 * - Renders a 40px circle cursor that follows the mouse with lerp 0.1
 * - On hover over buttons/links/.magnetic elements:
 *     • Cursor scales to 80px
 *     • Element moves 20% toward the cursor (magnetic pull)
 * - Uses GSAP ticker so the follow is synced to the render loop
 * - mix-blend-mode: difference applied via CSS class
 */
const useMagneticCursor = () => {
  useEffect(() => {
    
    const cursor = document.querySelector(".custom-cursor");
    if (!cursor) return;

    // Raw mouse position (updated immediately on every mousemove)
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Lerped position that the cursor actually renders at
    let cursorX = mouseX;
    let cursorY = mouseY;

    // Track current cursor size so we can lerp it too
    let targetSize = 40;
    let currentSize = 40;

    // ── Track mouse ──────────────────────────────────────────────
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Hide cursor when it leaves the window ─────────────────────
    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };
    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // ── GSAP ticker — runs every frame ────────────────────────────
    const LERP = 0.1;
    const SIZE_LERP = 0.12;

    const tick = () => {
      // Lerp cursor position
      cursorX += (mouseX - cursorX) * LERP;
      cursorY += (mouseY - cursorY) * LERP;

      // Lerp cursor size
      currentSize += (targetSize - currentSize) * SIZE_LERP;

      // Apply transform — centre the circle on the pointer
      const offset = currentSize / 2;
      cursor.style.transform = `translate(${cursorX - offset}px, ${cursorY - offset}px)`;
      cursor.style.width = `${currentSize}px`;
      cursor.style.height = `${currentSize}px`;
    };

    gsap.ticker.add(tick);

    // ── Interactive elements: buttons, links, .magnetic ───────────
    // Explicitly exclude form controls and anything marked .no-magnetic
    const MAGNETIC_SELECTOR =
      'a:not(.no-magnetic), button:not(.no-magnetic):not(input):not([type="submit"]):not(.cf-dropdown-trigger), .magnetic, .rotating-btn, [role="button"]:not(.no-magnetic):not(.cf-dropdown-trigger)';

    // Keep a map of active element → its cleanup functions
    // so we can always restore the element even if the user moves
    // the mouse out before the GSAP tween finishes.
    const activeElements = new Set();

    const handleEnter = (e) => {
      const el = e.currentTarget;
      activeElements.add(el);
      targetSize = 80; // expand cursor
    };

    const handleMove = (e) => {
      const el = e.currentTarget;
      if (!activeElements.has(el)) return;

      const rect = el.getBoundingClientRect();
      const elCenterX = rect.left + rect.width / 2;
      const elCenterY = rect.top + rect.height / 2;

      // Vector from element centre to cursor
      const deltaX = mouseX - elCenterX;
      const deltaY = mouseY - elCenterY;

      // Move element 20% of that vector toward the cursor
      gsap.to(el, {
        x: deltaX * 0.2,
        y: deltaY * 0.2,
        duration: 0.4,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const handleLeave = (e) => {
      const el = e.currentTarget;
      activeElements.delete(el);
      targetSize = 40; // restore cursor size

      // Spring the element back to its natural position
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    // Attach listeners to all matching elements that exist now
    // and re-query on DOM mutations (e.g. modals opening)
    let interactiveEls = [];

    const attachListeners = () => {
      // Detach from previous set first
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      });

      interactiveEls = Array.from(
        document.querySelectorAll(MAGNETIC_SELECTOR)
      );

      interactiveEls.forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mousemove", handleMove);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    // Initial attachment — defer a tick so the DOM is settled
    requestAnimationFrame(attachListeners);

    // Re-attach if new elements appear (e.g. route changes, popups)
    const observer = new MutationObserver(() => {
      requestAnimationFrame(attachListeners);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // ── Cleanup ───────────────────────────────────────────────────
    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();

      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
        // Make sure no element is stuck mid-tween
        gsap.killTweensOf(el);
        gsap.set(el, { x: 0, y: 0 });
      });
    };
  }, []);
};

export default useMagneticCursor;
