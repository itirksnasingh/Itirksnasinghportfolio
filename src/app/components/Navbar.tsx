import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], ["rgba(3,1,10,0)", "rgba(3,1,10,0.85)"]);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between"
      style={{
        backgroundColor: bgOpacity,
        backdropFilter: "blur(12px)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white cursor-pointer select-none"
        style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.1em" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span style={{ color: "#ff9fd8" }}>✦</span>{" "}
        <span className="opacity-90" style={{ fontSize: "1.05rem" }}>SANSKRITI SINGH</span>
      </motion.div>

      <motion.ul
        className="hidden md:flex items-center gap-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => handleClick(link.href)}
              className="relative text-white/60 hover:text-white/90 transition-colors duration-300 select-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{
                    background: "linear-gradient(90deg, #ff6eb4, #ffd700)",
                  }}
                />
              )}
            </button>
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}