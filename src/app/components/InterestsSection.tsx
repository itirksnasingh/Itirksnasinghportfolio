import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GlowFlower, GlowOrb } from "./GlowFlower";

const INTERESTS = [
  {
    title: "Artificial Intelligence",
    desc: "Exploring how machines learn, reason, and interact with complex data — from classical ML to the frontiers of generative AI.",
    icon: "◈",
    color: "#38bdf8",
    color2: "#a78bfa",
    flower: "bloom" as const,
  },
  {
    title: "System Design",
    desc: "Understanding how large systems are structured, scaled, and optimized — the architecture beneath the surface of every product.",
    icon: "◎",
    color: "#f472b6",
    color2: "#fbbf24",
    flower: "lily" as const,
  },
  {
    title: "Human-Centered Technology",
    desc: "Thinking about how technology can be designed to feel intuitive, meaningful, and genuinely useful for the people who use it.",
    icon: "◇",
    color: "#a78bfa",
    color2: "#fb923c",
    flower: "wildflower" as const,
  },
  {
    title: "Creative Exploration",
    desc: "Experimenting with ideas that sit at the intersection of technology, creativity, and storytelling — where logic meets imagination.",
    icon: "✦",
    color: "#34d399",
    color2: "#fbbf24",
    flower: "daisy" as const,
  },
  {
    title: "Learning New Domains",
    desc: "Continuously exploring new technologies, research areas, and ideas — curiosity as a practice, not just a trait.",
    icon: "○",
    color: "#fbbf24",
    color2: "#ff6eb4",
    flower: "bud" as const,
  },
];

export function InterestsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="interests"
      ref={ref}
      className="relative py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06010f 0%, #0a0218 50%, #06010f 100%)" }}
    >
      <GlowOrb size={500} color="#ff6eb4" opacity={0.07} className="absolute top-0 left-1/4" />
      <GlowOrb size={400} color="#38bdf8" opacity={0.07} className="absolute bottom-0 right-1/4" />
      <GlowOrb size={300} color="#fbbf24" opacity={0.06} className="absolute top-1/2 right-0" />

      {/* Scattered flower accents - simulating wildflower field */}
      <div className="absolute top-10 left-1/4 opacity-15">
        <GlowFlower variant="wildflower" scale={0.6} color1="#f472b6" color2="#fbbf24" delay={0.1} />
      </div>
      <div className="absolute top-24 right-1/3 opacity-15">
        <GlowFlower variant="daisy" scale={0.5} color1="#38bdf8" color2="#a78bfa" delay={0.4} />
      </div>
      <div className="absolute bottom-16 left-1/5 opacity-15">
        <GlowFlower variant="bud" scale={0.6} color1="#34d399" color2="#fbbf24" delay={0.7} />
      </div>
      <div className="absolute bottom-8 right-1/4 opacity-12">
        <GlowFlower variant="lily" scale={0.55} color1="#fb923c" color2="#fbbf24" delay={0.2} />
      </div>

      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-white/30 uppercase tracking-[0.3em] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem" }}>
            ✦ &nbsp; Beyond the Screen
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
            }}
          >
            A{" "}
            <em style={{ color: "#fb923c" }}>field</em>
            {" "}of curiosities
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTERESTS.map((interest, i) => (
            <motion.div
              key={interest.title}
              className="relative rounded-2xl p-6 group hover:scale-[1.02] transition-transform duration-500 cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
              }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{
                borderColor: `${interest.color}50`,
                boxShadow: `0 0 40px ${interest.color}15`,
              }}
            >
              {/* Flower */}
              <div className="absolute top-3 right-3 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                <GlowFlower
                  variant={interest.flower}
                  scale={0.42}
                  color1={interest.color}
                  color2={interest.color2}
                  delay={i * 0.15}
                />
              </div>

              {/* Icon */}
              <div
                className="mb-4"
                style={{
                  fontSize: "1.4rem",
                  color: interest.color,
                  textShadow: `0 0 20px ${interest.color}80`,
                }}
              >
                {interest.icon}
              </div>

              <h3
                className="text-white/85 mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", letterSpacing: "0.03em" }}
              >
                {interest.title}
              </h3>

              <p
                className="text-white/40"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", lineHeight: 1.75 }}
              >
                {interest.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${interest.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}