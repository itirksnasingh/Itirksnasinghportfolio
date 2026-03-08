import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GlowFlower, GlowOrb } from "./GlowFlower";
import gardenImg from "../../assets/about.png";

const TRAITS = [
  { label: "Curious", icon: "◎" },
  { label: "Builder", icon: "◈" },
  { label: "Systems Thinker", icon: "◇" },
  { label: "Explorer", icon: "○" },
  { label: "Problem Solver", icon: "◆" },
  { label: "Continuous Learner", icon: "✦" },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06010f 0%, #0d0320 50%, #06010f 100%)" }}
    >
      {/* Glow orbs */}
      <GlowOrb size={400} color="#a855f7" opacity={0.1} className="absolute -left-20 top-1/3" />
      <GlowOrb size={300} color="#ff6eb4" opacity={0.07} className="absolute right-0 top-1/2" />

      {/* Corner flowers */}
      <div className="absolute top-16 left-6 opacity-30">
        <GlowFlower variant="lily" scale={0.8} color1="#c084fc" color2="#fbbf24" delay={0.2} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-25">
        <GlowFlower variant="daisy" scale={0.9} color1="#f472b6" color2="#ffd700" delay={0.5} />
      </div>

      <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        {/* Image side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1.1" }}>
            <img
              src={gardenImg}
              alt="Dark floral garden"
              className="w-full h-full object-cover"
              style={{ filter: "saturate(1.3) brightness(0.85)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(255,111,180,0.15) 50%, transparent 100%)",
              }}
            />
            {/* Glow border */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ boxShadow: "inset 0 0 40px rgba(255,111,180,0.15), 0 0 60px rgba(168,85,247,0.1)" }}
            />
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 rounded-2xl px-5 py-4"
            style={{
              background: "rgba(13,3,32,0.85)",
              border: "1px solid rgba(255,111,180,0.25)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 30px rgba(255,111,180,0.1)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white/50 uppercase tracking-widest" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem" }}>
              Currently
            </p>
            <p className="text-white/90 mt-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>
              Open to Opportunities
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
              <span className="text-emerald-400/70" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem" }}>
                Available
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-white/30 uppercase tracking-[0.3em] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem" }}>
            ✦ &nbsp; About Me
          </p>
          <h2
            className="text-white mb-8"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.2,
            }}
          >
            A mind that looks for{" "}
            <em style={{ color: "#ff9fd8" }}>patterns</em>
            {", systems, and stories"}
          </h2>

          <div className="space-y-5 mb-10">
            <p className="text-white/55" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.92rem", lineHeight: 1.9 }}>
              I'm a computer science student exploring how technology can shape meaningful experiences. My interests live at the intersection of artificial intelligence, software development, and thoughtful design — where systems are not only functional, but expressive and human.
            </p>
            <p className="text-white/40" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.9 }}>
              I'm especially fascinated by how complex systems emerge from simple ideas. Whether I'm building AI models, designing interfaces, or experimenting with new technologies, I approach projects with curiosity and a builder's mindset.
            </p>
            <p className="text-white/35" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.9 }}>
              For me, learning is not just about mastering tools — it's about understanding how ideas connect. I enjoy exploring new domains, turning concepts into working systems, and continuously refining the way I think and create.
            </p>
          </div>

          {/* Philosophy quote */}
          <div
            className="mb-10 pl-5"
            style={{ borderLeft: "2px solid rgba(255,111,180,0.35)" }}
          >
            <p
              className="text-white/50"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                fontStyle: "italic",
                lineHeight: 1.7,
              }}
            >
              "The most interesting systems are the ones that grow."
            </p>
          </div>

          {/* Traits */}
          <div className="flex flex-wrap gap-3">
            {TRAITS.map((t, i) => (
              <motion.span
                key={t.label}
                className="px-4 py-1.5 rounded-full text-white/60"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
              >
                <span className="mr-2 opacity-60">{t.icon}</span>
                {t.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
