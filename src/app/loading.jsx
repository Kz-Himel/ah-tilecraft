"use client";

import { useSpring, animated } from "@react-spring/web";
export function SpinnerLoader({ text = "Crafting your experience" }) {
  const spinnerStyle = useSpring({
    loop: true,
    from: { rotate: 0 },
    to:   { rotate: 360 },
    config: { duration: 900, easing: (t) => t },
  });

  const outerRing = useSpring({
    loop: { reverse: true },
    from: { scale: 0.85, opacity: 0.6 },
    to:   { scale: 1.1,  opacity: 1   },
    config: { tension: 80, friction: 20 },
  });

  const textFade = useSpring({
    loop: { reverse: true },
    from: { opacity: 0.4 },
    to:   { opacity: 1   },
    config: { tension: 60, friction: 20 },
  });

  return (
    <div style={{
      background: "#1A1A1A",
      borderRadius: 16,
      padding: "40px 32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20,
    }}>
      {/* Rings + spinner */}
      <animated.div style={{
        width: 80, height: 80, borderRadius: "50%",
        border: "2px solid rgba(212,175,55,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
        transform: outerRing.scale.to((s) => `scale(${s})`),
        opacity: outerRing.opacity,
      }}>
        <div style={{
          width: 62, height: 62, borderRadius: "50%",
          border: "2px solid rgba(212,175,55,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <animated.div style={{
            width: 46, height: 46, borderRadius: "50%",
            borderTop:    "3px solid #D4AF37",
            borderRight:  "3px solid rgba(212,175,55,0.4)",
            borderBottom: "3px solid transparent",
            borderLeft:   "3px solid transparent",
            transform: spinnerStyle.rotate.to((r) => `rotate(${r}deg)`),
          }} />
        </div>
      </animated.div>

      {/* Brand + text */}
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontSize: 16, fontWeight: 500 }}>
          <span style={{ color: "#fff" }}>AH </span>
          <span style={{ color: "#D4AF37" }}>TileCraft</span>
        </div>
        <animated.span style={{
          fontSize: 13,
          color: "rgba(255,255,255,0.5)",
          opacity: textFade.opacity,
        }}>
          {text}
        </animated.span>
      </div>
    </div>
  );
}