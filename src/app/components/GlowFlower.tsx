import { motion } from "motion/react";

interface GlowFlowerProps {
  x?: number | string;
  y?: number | string;
  scale?: number;
  color1?: string;
  color2?: string;
  color3?: string;
  rotate?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  variant?: "daisy" | "bloom" | "lily" | "bud" | "wildflower" | "stem";
}

export function GlowFlower({
  scale = 1,
  color1 = "#ff6eb4",
  color2 = "#ffd700",
  color3 = "#ff4fa0",
  rotate = 0,
  delay = 0,
  className = "",
  style = {},
  variant = "bloom",
}: GlowFlowerProps) {
  const id = Math.random().toString(36).slice(2);

  const sway = {
    animate: {
      rotate: [rotate - 3, rotate + 3, rotate - 3],
      y: [0, -4, 0],
    },
    transition: {
      duration: 4 + Math.random() * 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  };

  if (variant === "daisy") {
    return (
      <motion.svg
        className={className}
        style={style}
        width={80 * scale}
        height={80 * scale}
        viewBox="0 0 80 80"
        fill="none"
        animate={sway.animate}
        transition={sway.transition}
      >
        <defs>
          <radialGradient id={`dg${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color2} stopOpacity="0.9" />
            <stop offset="100%" stopColor={color1} stopOpacity="0.4" />
          </radialGradient>
          <filter id={`gf${id}`}>
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((a, i) => (
          <ellipse
            key={i}
            cx={40 + 16 * Math.cos((a * Math.PI) / 180)}
            cy={40 + 16 * Math.sin((a * Math.PI) / 180)}
            rx={7}
            ry={12}
            transform={`rotate(${a} ${40 + 16 * Math.cos((a * Math.PI) / 180)} ${40 + 16 * Math.sin((a * Math.PI) / 180)})`}
            fill={color1}
            opacity="0.75"
            filter={`url(#gf${id})`}
          />
        ))}
        <circle cx="40" cy="40" r="10" fill={`url(#dg${id})`} />
      </motion.svg>
    );
  }

  if (variant === "lily") {
    return (
      <motion.svg
        className={className}
        style={style}
        width={70 * scale}
        height={90 * scale}
        viewBox="0 0 70 90"
        fill="none"
        animate={sway.animate}
        transition={sway.transition}
      >
        <defs>
          <linearGradient id={`lg${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color2} />
            <stop offset="100%" stopColor={color1} />
          </linearGradient>
          <filter id={`gf2${id}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <line x1="35" y1="90" x2="35" y2="45" stroke="#2d8a5e" strokeWidth="2" opacity="0.6" />
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <ellipse
            key={i}
            cx={35 + 18 * Math.cos((a * Math.PI) / 180)}
            cy={40 + 18 * Math.sin((a * Math.PI) / 180)}
            rx={6}
            ry={18}
            transform={`rotate(${a + 90} ${35 + 18 * Math.cos((a * Math.PI) / 180)} ${40 + 18 * Math.sin((a * Math.PI) / 180)})`}
            fill={`url(#lg${id})`}
            opacity="0.8"
            filter={`url(#gf2${id})`}
          />
        ))}
        <circle cx="35" cy="40" r="5" fill={color2} opacity="0.9" />
      </motion.svg>
    );
  }

  if (variant === "bud") {
    return (
      <motion.svg
        className={className}
        style={style}
        width={40 * scale}
        height={60 * scale}
        viewBox="0 0 40 60"
        fill="none"
        animate={sway.animate}
        transition={sway.transition}
      >
        <defs>
          <linearGradient id={`bg${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        <line x1="20" y1="60" x2="20" y2="30" stroke="#3a9a6e" strokeWidth="1.5" opacity="0.5" />
        <ellipse cx="20" cy="22" rx="8" ry="14" fill={`url(#bg${id})`} opacity="0.85" />
        <ellipse cx="20" cy="22" rx="5" ry="10" fill={color2} opacity="0.4" />
      </motion.svg>
    );
  }

  if (variant === "wildflower") {
    return (
      <motion.svg
        className={className}
        style={style}
        width={60 * scale}
        height={80 * scale}
        viewBox="0 0 60 80"
        fill="none"
        animate={sway.animate}
        transition={sway.transition}
      >
        <defs>
          <radialGradient id={`wg${id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color2} />
            <stop offset="60%" stopColor={color1} />
            <stop offset="100%" stopColor={color3} stopOpacity="0" />
          </radialGradient>
        </defs>
        <line x1="30" y1="80" x2="30" y2="38" stroke="#2d7a50" strokeWidth="1.5" opacity="0.6" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
          <ellipse
            key={i}
            cx={30 + 14 * Math.cos((a * Math.PI) / 180)}
            cy={28 + 14 * Math.sin((a * Math.PI) / 180)}
            rx={5}
            ry={9}
            transform={`rotate(${a + 90} ${30 + 14 * Math.cos((a * Math.PI) / 180)} ${28 + 14 * Math.sin((a * Math.PI) / 180)})`}
            fill={color1}
            opacity="0.7"
          />
        ))}
        <circle cx="30" cy="28" r="8" fill={`url(#wg${id})`} />
      </motion.svg>
    );
  }

  if (variant === "stem") {
    return (
      <motion.svg
        className={className}
        style={style}
        width={30 * scale}
        height={120 * scale}
        viewBox="0 0 30 120"
        fill="none"
        animate={{
          ...sway.animate,
          rotate: [rotate - 2, rotate + 2, rotate - 2],
        }}
        transition={sway.transition}
      >
        <defs>
          <linearGradient id={`stg${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color1} stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1a5c38" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M15 120 Q10 90 15 60 Q20 30 15 0"
          stroke={`url(#stg${id})`}
          strokeWidth="2"
          fill="none"
        />
        <ellipse cx="8" cy="75" rx="12" ry="6"
          transform="rotate(-30 8 75)"
          fill="#2d8a5e" opacity="0.4" />
        <ellipse cx="22" cy="50" rx="10" ry="5"
          transform="rotate(20 22 50)"
          fill="#2d8a5e" opacity="0.35" />
        <ellipse cx="15" cy="10" rx={6 * scale} ry={9 * scale}
          fill={color1} opacity="0.85" />
      </motion.svg>
    );
  }

  // Default: bloom
  return (
    <motion.svg
      className={className}
      style={style}
      width={100 * scale}
      height={100 * scale}
      viewBox="0 0 100 100"
      fill="none"
      animate={sway.animate}
      transition={sway.transition}
    >
      <defs>
        <radialGradient id={`rg${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color2} stopOpacity="1" />
          <stop offset="50%" stopColor={color1} stopOpacity="0.7" />
          <stop offset="100%" stopColor={color3} stopOpacity="0.2" />
        </radialGradient>
        <filter id={`glow${id}`}>
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => (
        <ellipse
          key={i}
          cx={50 + 22 * Math.cos((a * Math.PI) / 180)}
          cy={50 + 22 * Math.sin((a * Math.PI) / 180)}
          rx={8}
          ry={16}
          transform={`rotate(${a + 90} ${50 + 22 * Math.cos((a * Math.PI) / 180)} ${50 + 22 * Math.sin((a * Math.PI) / 180)})`}
          fill={i % 2 === 0 ? color1 : color3}
          opacity="0.65"
          filter={`url(#glow${id})`}
        />
      ))}
      <circle cx="50" cy="50" r="14" fill={`url(#rg${id})`} filter={`url(#glow${id})`} />
    </motion.svg>
  );
}

export function GlowOrb({
  size = 200,
  color = "#ff6eb4",
  opacity = 0.15,
  className = "",
  style = {},
}: {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        filter: "blur(40px)",
        ...style,
      }}
    />
  );
}
