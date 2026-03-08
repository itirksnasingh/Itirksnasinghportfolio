import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GlowFlower, GlowOrb } from "./GlowFlower";
import heroFlowers from "figma:asset/193ff370d614f9be2c097029c8f80922e0cc8999.png";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const flowerY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #030107 0%, #0a0318 60%, #06010f 100%)" }}
    >
      {/* Background glow orbs */}
      <GlowOrb size={500} color="#6b21a8" opacity={0.12} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GlowOrb size={300} color="#ff6eb4" opacity={0.08} className="absolute top-1/4 left-1/4" />
      <GlowOrb size={250} color="#ffd700" opacity={0.06} className="absolute top-2/3 right-1/4" />

      {/* Decorative small flowers - corners */}
      <div className="absolute top-28 left-8 opacity-40">
        <GlowFlower variant="bud" scale={0.7} color1="#c084fc" color2="#ffd700" delay={0.3} />
      </div>
      <div className="absolute top-24 right-12 opacity-35">
        <GlowFlower variant="stem" scale={0.6} color1="#f472b6" color2="#fbbf24" delay={0.8} />
      </div>

      {/* Hero flower image from bottom - parallax */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ y: flowerY }}
      >
        <img
          src={heroFlowers}
          alt="Glowing botanical garden"
          className="w-full object-cover object-bottom"
          style={{ height: "45vh", maskImage: "linear-gradient(to top, black 40%, transparent 100%)" }}
        />
        {/* Extra glow on top of image */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(3,1,10,0.3) 60%, rgba(3,1,10,0) 100%)",
          }}
        />
      </motion.div>

      {/* Center content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y: contentY, opacity }}
      >
        <motion.p
          className="text-white/40 uppercase tracking-[0.35em] mb-5"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          ✦ &nbsp; Computer Science Portfolio &nbsp; ✦
        </motion.p>

        <motion.h1
          className="text-white mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            fontWeight: 300,
            letterSpacing: "0.04em",
            lineHeight: 1.05,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Sanskriti{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ff9fd8 0%, #ffd700 60%, #ff6b6b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Singh
          </span>
        </motion.h1>

        <motion.p
          className="text-white/55 mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            fontStyle: "italic",
            letterSpacing: "0.06em",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Exploring Intelligence Through Code
        </motion.p>

        <motion.p
          className="text-white/35 mb-10 max-w-md mx-auto"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.8 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
        >
          Computer Science student exploring the intersection of intelligence, design, and technology.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="relative group px-8 py-3 rounded-full overflow-hidden transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(255,111,180,0.2) 0%, rgba(255,215,0,0.15) 100%)",
              border: "1px solid rgba(255,159,216,0.35)",
              color: "rgba(255,255,255,0.9)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            <span className="relative z-10">Explore Work</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(255,111,180,0.35) 0%, rgba(255,215,0,0.25) 100%)",
              }}
            />
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-full text-white/50 hover:text-white/80 transition-colors duration-300"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em", color: "white", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(255,159,216,0.6), transparent)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}