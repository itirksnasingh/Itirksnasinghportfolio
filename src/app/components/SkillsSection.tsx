import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { GlowFlower, GlowOrb } from "./GlowFlower";

const SKILLS = [
  {
    category: "Development",
    color1: "#ff6eb4",
    color2: "#ffd700",
    variant: "bloom" as const,
    items: ["Python", "JavaScript", "React", "TypeScript", "Node.js", "REST APIs"],
  },
  {
    category: "Artificial Intelligence",
    color1: "#38bdf8",
    color2: "#a78bfa",
    variant: "lily" as const,
    items: ["Machine Learning", "Deep Learning", "Neural Networks", "Data Analysis", "Model Training"],
  },
  {
    category: "Tools & Technologies",
    color1: "#c084fc",
    color2: "#fb923c",
    variant: "daisy" as const,
    items: ["Git & GitHub", "Linux", "VS Code", "Docker (learning)", "Cloud Basics"],
  },
  {
    category: "CS Foundations",
    color1: "#f472b6",
    color2: "#fbbf24",
    variant: "wildflower" as const,
    items: ["Data Structures", "Algorithms", "System Design", "Problem Solving", "OOP"],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06010f 0%, #080115 50%, #06010f 100%)" }}
    >
      <GlowOrb size={500} color="#7c3aed" opacity={0.09} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Corner accents */}
      <div className="absolute top-12 right-8 opacity-25">
        <GlowFlower variant="bud" scale={0.8} color1="#38bdf8" color2="#34d399" delay={0.3} />
      </div>
      <div className="absolute bottom-12 left-8 opacity-20">
        <GlowFlower variant="stem" scale={0.7} color1="#c084fc" color2="#fb923c" delay={0.6} />
      </div>

      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-white/30 uppercase tracking-[0.3em] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem" }}>
            ✦ &nbsp; Skills &amp; Craft
          </p>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "0.03em",
            }}
          >
            A bioluminescent{" "}
            <em style={{ color: "#a5f3fc" }}>network</em>{" "}
            of skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.category}
              className="relative rounded-2xl p-6 cursor-default group"
              style={{
                background: hovered === i
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(255,255,255,0.025)",
                border: `1px solid ${hovered === i ? `${skill.color1}55` : "rgba(255,255,255,0.08)"}`,
                backdropFilter: "blur(10px)",
                transition: "all 0.4s ease",
                boxShadow: hovered === i ? `0 0 40px ${skill.color1}20` : "none",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Flower icon */}
              <motion.div
                className="mb-5"
                animate={hovered === i ? { scale: 1.15 } : { scale: 1 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <GlowFlower
                  variant={skill.variant}
                  scale={0.65}
                  color1={skill.color1}
                  color2={skill.color2}
                  color3={skill.color1}
                  delay={i * 0.2}
                />
              </motion.div>

              <h3
                className="text-white/80 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem",
                  letterSpacing: "0.05em",
                }}
              >
                {skill.category}
              </h3>

              <ul className="space-y-2">
                {skill.items.map((item, j) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-2 text-white/45"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 + j * 0.06 }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${skill.color1}, ${skill.color2})`,
                        flexShrink: 0,
                        boxShadow: `0 0 6px ${skill.color1}80`,
                      }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Hover glow ring */}
              {hovered === i && (
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${skill.color1}15 0%, transparent 70%)`,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}