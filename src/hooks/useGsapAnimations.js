import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
  useEffect(() => {

    // ─── LENIS SMOOTH SCROLL ─────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.8,          // slightly longer for a more cinematic feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // ─── GSAP CONTEXT — scopes all animations; auto-cleans on revert
    const ctx = gsap.context(() => {

      // ═══════════════════════════════════════════════════════════
      // 1. LINE MASK REVEAL
      // ═══════════════════════════════════════════════════════════

      gsap.set(".line-inner", { y: "110%", opacity: 0 });

      // Hero — on load, no ScrollTrigger
      gsap.timeline({ delay: 0.4 }).to(".banner-wrapper .line-inner", {
        y: "0%",
        opacity: 1,
        duration: 1.4,
        stagger: 0.18,
        ease: "power4.out",
      });

      // Scroll sections — fire once when each enters view
      [
        ".about-wrapper",
        ".skills-wrapper",
        ".services-wrapper",
        ".projects-wrapper",
        ".contact-wrapper",
      ].forEach((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        const lines = el.querySelectorAll(".line-inner");
        if (!lines.length) return;

        gsap.to(lines, {
          y: "0%",
          opacity: 1,
          duration: 1.4,
          stagger: 0.18,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sel,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // ═══════════════════════════════════════════════════════════
      // 2. HERO — watermark parallax + SVG entrance
      // ═══════════════════════════════════════════════════════════

      gsap.to(".bg-code", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: ".banner-wrapper", scrub: 1.5 },
      });

      gsap.from(".banner-vector", {
        opacity: 0,
        scale: 0.65,
        rotate: -12,
        y: 40,
        duration: 2,
        ease: "expo.out",
        delay: 0.2,
      });

      // ═══════════════════════════════════════════════════════════
      // 3. ABOUT — photo parallax (drifts up 30px on scroll)
      // ═══════════════════════════════════════════════════════════

      gsap.to(".my-photo", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-wrapper",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // ═══════════════════════════════════════════════════════════
      // 4. SKILL BOXES — staggered entrance with back.out bounce
      // ═══════════════════════════════════════════════════════════

      gsap.utils.toArray(".skill-box").forEach((box, i) => {
        gsap.fromTo(box,
          { opacity: 0, y: 40, scale: 0.85, rotateX: -20 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            ease: "back.out(1.4)",
            delay: i * 0.06,
            scrollTrigger: {
              trigger: box,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ═══════════════════════════════════════════════════════════
      // 5. PROJECT CARDS — 3D entrance + continuous mouse-tilt
      // ═══════════════════════════════════════════════════════════

      gsap.utils.toArray(".project-box").forEach((card, i) => {
        // 3D entrance — from slight depth + Y offset
        gsap.fromTo(card,
          { opacity: 0, y: 70, scale: 0.92, rotateX: -15, z: -80 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            z: 0,
            duration: 1.1,
            ease: "expo.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ─── Shared 3D tilt factory ───────────────────────────────
      const attachTilt = (el, maxRotY = 12, maxRotX = 8) => {
        const setRotY = gsap.quickTo(el, "rotateY", { duration: 0.5, ease: "power2.out" });
        const setRotX = gsap.quickTo(el, "rotateX", { duration: 0.5, ease: "power2.out" });
        // Gloss shine highlight moves with tilt
        const shine = el.querySelector(".card-shine");

        const onMove = (e) => {
          const rect = el.getBoundingClientRect();
          const nx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2; // -1 → +1
          const ny = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
          setRotY(nx * maxRotY);
          setRotX(-ny * maxRotX);
          // Shift shine gradient opposite to tilt direction
          if (shine) {
            gsap.to(shine, {
              x: nx * 20,
              y: ny * 20,
              opacity: 0.12,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        };

        const onEnter = () => {
          gsap.to(el, { scale: 1.02, duration: 0.4, ease: "power2.out" });
        };

        const onLeave = () => {
          // Elastic spring-back
          gsap.to(el, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 1.4,
            ease: "elastic.out(1, 0.45)",
          });
          if (shine) {
            gsap.to(shine, { opacity: 0, duration: 0.4 });
          }
        };

        el.addEventListener("mousemove",  onMove);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);

        return () => {
          el.removeEventListener("mousemove",  onMove);
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        };
      };

      // Attach tilt to all project cards
      const projectCleanups = [];
      gsap.utils.toArray(".project-box").forEach((card) => {
        projectCleanups.push(attachTilt(card, 12, 8));
      });

      // ═══════════════════════════════════════════════════════════
      // 6. SERVICE CARDS — 3D entrance + tilt
      // ═══════════════════════════════════════════════════════════

      gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 90, scale: 0.9, rotateX: -20, z: -120 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            z: 0,
            duration: 1.2,
            ease: "expo.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      const serviceCleanups = [];
      gsap.utils.toArray(".service-card").forEach((card) => {
        serviceCleanups.push(attachTilt(card, 10, 7));
      });

      // ═══════════════════════════════════════════════════════════
      // 7. MARQUEE — continuous CSS animation, zero scroll-coupling
      //
      //    Problem with the previous scrub approach:
      //    xPercent:-50 over one viewport height = very fast movement.
      //    Fix: use a CSS @keyframes infinite loop driven by
      //    animation-duration, not scroll. GSAP only handles the
      //    reveal entrance of the marquee section itself.
      //
      //    Two rows:
      //      .marquee-track--left  → scrolls LEFT  (skills)
      //      .marquee-track--right → scrolls RIGHT (tools)
      //    Each track = THREE identical sets (not two) so there is
      //    always content visible during the loop reset.
      // ═══════════════════════════════════════════════════════════

      // Entrance — fade + slide the whole marquee section in
      const marqueeSection = document.querySelector(".marquee-section");
      if (marqueeSection) {
        gsap.fromTo(marqueeSection,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: marqueeSection,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // ═══════════════════════════════════════════════════════════
      // 8. PROJECT IMAGES — subtle inner parallax zoom
      // ═══════════════════════════════════════════════════════════

      gsap.utils.toArray(".project-image").forEach((img) => {
        gsap.fromTo(img,
          { scale: 1.25, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ═══════════════════════════════════════════════════════════
      // 9. REVEAL-TEXT body paragraphs
      // ═══════════════════════════════════════════════════════════

      gsap.utils.toArray(".reveal-text").forEach((text) => {
        gsap.fromTo(text,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // ═══════════════════════════════════════════════════════════
      // 10. MAGNETIC BUTTONS
      // ═══════════════════════════════════════════════════════════

      document.querySelectorAll(".magnetic").forEach((item) => {
        const onMove = (e) => {
          const rect = item.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width  / 2;
          const y = e.clientY - rect.top  - rect.height / 2;
          gsap.to(item, { x: x * 0.3, y: y * 0.3, duration: 0.6, ease: "power3.out" });
        };
        const onLeave = () => {
          gsap.to(item, { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.35)" });
        };
        item.addEventListener("mousemove",  onMove);
        item.addEventListener("mouseleave", onLeave);
      });

      // ═══════════════════════════════════════════════════════════
      // 11. CURSOR GLOW
      // ═══════════════════════════════════════════════════════════

      const glow = document.querySelector(".cursor-glow");
      if (glow) {
        window.addEventListener("mousemove", (e) => {
          gsap.to(glow, {
            x: e.clientX - 150,
            y: e.clientY - 150,
            duration: 0.8,
            ease: "power3.out",
          });
        });
      }

    }); // end gsap.context

    // ─── CLEANUP ─────────────────────────────────────────────────
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };

  }, []);
};

export default useGsapAnimations;
