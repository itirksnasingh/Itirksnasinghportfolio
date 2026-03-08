import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { GlowFlower, GlowOrb } from "./GlowFlower";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const LINKS = [
  { icon: Mail, label: "itirksnasingh.mail@gmail.com", href: "mailto:sanskrutisinghmshs@gmail.com", color: "#ff6eb4" },
  { icon: Github, label: "github.com/itirksnasingh", href: "https://github.com/itirksnasingh", color: "#a78bfa" },
  { icon: Linkedin, label: "linkedin.com/in/itirksnasingh", href: "https://www.linkedin.com/in/itirksnasingh", color: "#38bdf8" },
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06010f 0%, #070112 40%, #030107 100%)" }}
    >
      {/* Very subtle glow orbs - quiet night garden */}
      <GlowOrb size={600} color="#6d28d9" opacity={0.06} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GlowOrb size={200} color="#ff6eb4" opacity={0.08} className="absolute top-1/4 right-1/4" />
      <GlowOrb size={180} color="#fbbf24" opacity={0.07} className="absolute bottom-1/3 left-1/4" />

      {/* Quiet lantern flowers */}
      <div className="absolute bottom-16 left-10 opacity-30">
        <GlowFlower variant="stem" scale={0.9} color1="#ff6eb4" color2="#fbbf24" delay={0.2} />
      </div>
      <div className="absolute bottom-24 right-12 opacity-25">
        <GlowFlower variant="bud" scale={0.8} color1="#a78bfa" color2="#38bdf8" delay={0.6} />
      </div>
      <div className="absolute top-28 left-16 opacity-20">
        <GlowFlower variant="lily" scale={0.6} color1="#34d399" color2="#fbbf24" delay={1} />
      </div>
      <div className="absolute top-20 right-20 opacity-18">
        <GlowFlower variant="daisy" scale={0.55} color1="#f472b6" color2="#fbbf24" delay={0.4} />
      </div>

      {/* Floating pollen particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 3 + Math.random() * 3,
            height: 3 + Math.random() * 3,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            background: ["#ff6eb4", "#fbbf24", "#a78bfa", "#38bdf8", "#34d399"][i % 5],
            opacity: 0.4,
            boxShadow: `0 0 8px ${["#ff6eb4", "#fbbf24", "#a78bfa", "#38bdf8", "#34d399"][i % 5]}`,
          }}
          animate={{
            y: [-20, -60, -20],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-2xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <p className="text-white/30 uppercase tracking-[0.3em] mb-6" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem" }}>
            ✦ &nbsp; Let's Create Together
          </p>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 300,
              letterSpacing: "0.02em",
              lineHeight: 1.1,
            }}
          >
            Shall we build{" "}
            <em
              style={{
                background: "linear-gradient(135deg, #ff9fd8, #ffd700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              something
            </em>
            {" "}meaningful?
          </h2>

          <p
            className="text-white/40 mb-14 max-w-md mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.85 }}
          >
            Whether it's a collaboration, an interesting idea, or simply a conversation about technology and creativity — I'd love to connect.
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          className="space-y-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="flex items-center justify-between px-6 py-4 rounded-2xl group transition-all duration-400 w-full"
              style={{
                background: hoveredLink === i ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.025)",
                border: `1px solid ${hoveredLink === i ? `${link.color}50` : "rgba(255,255,255,0.07)"}`,
                backdropFilter: "blur(10px)",
                boxShadow: hoveredLink === i ? `0 0 30px ${link.color}18` : "none",
              }}
              onMouseEnter={() => setHoveredLink(i)}
              onMouseLeave={() => setHoveredLink(null)}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-full"
                  style={{
                    background: `${link.color}18`,
                    border: `1px solid ${link.color}35`,
                  }}
                >
                  <link.icon size={16} style={{ color: link.color }} />
                </div>
                <span
                  className="text-white/65"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.88rem" }}
                >
                  {link.label}
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: hoveredLink === i ? link.color : "rgba(255,255,255,0.25)" }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="h-px w-20 mx-auto mb-6" style={{ background: "rgba(255,111,180,0.3)" }} />
          <p
            className="text-white/20"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em" }}
          >
            © 2026 SANSKRITI SINGH · BUILT WITH CURIOSITY &amp; CARE
          </p>
          <p
            className="text-white/15 mt-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", fontStyle: "italic" }}
          >
            May your curiosity always lead somewhere new.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
