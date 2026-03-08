import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { GlowFlower, GlowOrb } from "./GlowFlower";

const MILESTONES = [
  {
    year: "2025 – Present",
    role: "AI/ML Student",
    place: "B.Tech Computer Science",
    desc: "Focused on developing strong foundations in machine learning, algorithms, and system thinking while building practical projects and exploring emerging technologies.",
    color: "#ff6eb4",
    flower: "bloom" as const,
  },
  {
    year: "2025",
    role: "Founder",
    place: "AIgnite",
    desc: "Founded AIgnite to bring together students interested in AI, systems, and emerging technologies — a space to explore ideas, build projects, and learn together.",
    color: "#a78bfa",
    flower: "wildflower" as const,
  },
  {
    year: "2024 – Present",
    role: "Independent Developer",
    place: "Personal Projects",
    desc: "Building personal projects to explore artificial intelligence, web technologies, and creative computing while experimenting with new ideas and tools.",
    color: "#fbbf24",
    flower: "lily" as const,
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const vineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06010f 0%, #0d0218 50%, #06010f 100%)" }}
    >
      <GlowOrb size={400} color="#ff6eb4" opacity={0.08} className="absolute top-1/4 right-0 translate-x-1/3" />
      <GlowOrb size={350} color="#7c3aed" opacity={0.09} className="absolute bottom-1/3 left-0 -translate-x-1/4" />

      {/* Corner accents */}
      <div className="absolute top-16 left-6 opacity-20">
        <GlowFlower variant="bud" scale={0.9} color1="#fbbf24" color2="#ff6eb4" delay={0.2} />
      </div>

      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-white/30 uppercase tracking-[0.3em] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem" }}>
            ✦ &nbsp; Journey
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
            }}
          >
            A growing{" "}
            <em style={{ color: "#34d399" }}>path</em>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated vine line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 overflow-hidden">
            <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.06)" }} />
            <motion.div
              className="absolute inset-x-0 top-0"
              style={{
                height: vineHeight,
                background: "linear-gradient(to bottom, #ff6eb4, #fbbf24, #a78bfa, #34d399, #38bdf8)",
                boxShadow: "0 0 12px rgba(255,111,180,0.5)",
              }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-16">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, delay: i * 0.18 }}
              >
                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div
                    className="inline-block rounded-2xl p-5"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${m.color}30`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <p
                      className="mb-1"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.68rem",
                        letterSpacing: "0.2em",
                        color: m.color,
                        textTransform: "uppercase",
                      }}
                    >
                      {m.year} · {m.place}
                    </p>
                    <h3
                      className="text-white/85 mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
                    >
                      {m.role}
                    </h3>
                    <p
                      className="text-white/40"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", lineHeight: 1.7 }}
                    >
                      {m.desc}
                    </p>
                  </div>
                </div>

                {/* Node on vine */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center" style={{ top: "1.2rem" }}>
                  <motion.div
                    className="rounded-full"
                    style={{
                      width: 14,
                      height: 14,
                      background: m.color,
                      boxShadow: `0 0 16px ${m.color}80, 0 0 30px ${m.color}40`,
                    }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Flower at node */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-6 opacity-50">
                  <GlowFlower
                    variant={m.flower}
                    scale={0.45}
                    color1={m.color}
                    color2={MILESTONES[(i + 1) % MILESTONES.length].color}
                    delay={i * 0.25}
                  />
                </div>

                {/* Empty side */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}