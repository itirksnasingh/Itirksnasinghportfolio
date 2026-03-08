import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { GlowFlower, GlowOrb } from "./GlowFlower";

/* Local assets */
import gif1 from "../../assets/11.gif";
import gif2 from "../../assets/22.gif";
import gif3 from "../../assets/33.gif";

/* You can replace these later if needed */
import abstractImg from "../../assets/abstract.png";
import jellyfishImg from "../../assets/jellyfish.png";

const PROJECTS = [
  {
    id: 1,
    title: "AI Knowledge Assistant",
    description:
      "A retrieval-augmented AI assistant that allows users to upload documents and ask questions, combining semantic search with large language models to generate contextual answers.",
    tags: ["Python", "Generative AI", "LLMs", "Vector Databases"],
    image: abstractImg,
    accent: "#38bdf8",
    accent2: "#a78bfa",
  },
  {
    id: 2,
    title: "Customer Churn Intelligence",
    description:
      "A machine learning system that predicts customer churn and simulates retention strategies to help businesses reduce revenue loss and improve customer engagement.",
    tags: [
      "Python",
      "Machine Learning",
      "Predictive Analytics",
      "Business Intelligence",
    ],
    image: jellyfishImg,
    accent: "#ff6eb4",
    accent2: "#ffd700",
  },
  {
    id: 3,
    title: "ML Model Deployment API",
    description:
      "A production-style machine learning service that exposes predictive models through a REST API, enabling real-time predictions and integration with external applications.",
    tags: ["Python", "ML Engineering", "API Development", "FastAPI"],
    image: gif3,
    accent: "#c084fc",
    accent2: "#fb923c",
  },
  {
    id: 4,
    title: "Resume Skill Gap Analyzer",
    description:
      "An AI-powered tool that analyzes resumes and compares them with job descriptions to identify missing skills and recommend improvements using NLP techniques.",
    tags: [
      "Python",
      "Natural Language Processing",
      "AI Applications",
      "Career Analytics",
    ],
    image: gif2,
    accent: "#34d399",
    accent2: "#fbbf24",
  },
  {
    id: 5,
    title: "Intelligent Expense Anomaly Detector",
    description:
      "A data analysis system that detects unusual spending patterns using statistical methods and anomaly detection models to flag suspicious financial activity.",
    tags: ["Python", "Anomaly Detection", "Data Science", "Financial Analytics"],
    image: gif1,
    accent: "#fbbf24",
    accent2: "#f472b6",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-36 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #06010f 0%, #0a0318 50%, #06010f 100%)",
      }}
    >
      {/* Background glow */}
      <GlowOrb
        size={600}
        color="#6d28d9"
        opacity={0.08}
        className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4"
      />

      <GlowOrb
        size={400}
        color="#ff6eb4"
        opacity={0.07}
        className="absolute bottom-0 left-0 -translate-x-1/4"
      />

      {/* Decorative flowers */}
      <div className="absolute top-20 left-10 opacity-20">
        <GlowFlower
          variant="wildflower"
          scale={0.7}
          color1="#f472b6"
          color2="#fbbf24"
          delay={0.3}
        />
      </div>

      <div className="absolute bottom-16 right-8 opacity-20">
        <GlowFlower
          variant="lily"
          scale={0.8}
          color1="#38bdf8"
          color2="#a78bfa"
          delay={0.6}
        />
      </div>

      <div className="max-w-6xl mx-auto px-8">
        {/* Section title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p
            className="text-white/30 uppercase tracking-[0.3em] mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
            }}
          >
            ✦ &nbsp; Selected Work
          </p>

          <h2
            className="text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
            }}
          >
            A garden of <em style={{ color: "#fbbf24" }}>projects</em>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group${
                i === 4 ? " md:col-span-2 max-w-2xl mx-auto w-full" : ""
              }`}
              style={{
                border: `1px solid ${
                  hovered === i
                    ? `${project.accent}55`
                    : "rgba(255,255,255,0.08)"
                }`,
                transition: "border-color 0.4s ease",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[240px]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover select-none"
                  style={{
                    filter: "brightness(0.7) saturate(1.2)",
                  }}
                  animate={hovered === i ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ duration: 0.6 }}
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(6,1,15,0.95) 100%)",
                  }}
                />

                {/* Bloom animation */}
                {hovered === i && (
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <GlowFlower
                      variant="daisy"
                      scale={0.5}
                      color1={project.accent}
                      color2={project.accent2}
                      delay={0}
                    />
                  </motion.div>
                )}
              </div>

              {/* Card content */}
              <div
                className="p-6"
                style={{
                  background: "rgba(6,1,15,0.9)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <h3
                  className="text-white/90 mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.35rem",
                    letterSpacing: "0.03em",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-white/45 mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.83rem",
                    lineHeight: 1.75,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full"
                      style={{
                        background: `${project.accent}18`,
                        border: `1px solid ${project.accent}40`,
                        color: project.accent,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.7rem",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-500"
                style={{
                  boxShadow:
                    hovered === i
                      ? `0 0 60px ${project.accent}25, inset 0 0 30px ${project.accent}08`
                      : "none",
                  opacity: hovered === i ? 1 : 0,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
