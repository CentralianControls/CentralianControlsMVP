import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import introImage from "../../assets/images/intro.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#1a1d23] via-[#2d3748] to-[#1a1d23] text-white"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14,165,233,0.14) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14,165,233,0.14) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.16, 0.28, 0.16] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-10 top-20 h-72 w-72 rounded-full bg-cyan-500 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-sky-400 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2">
              <span className="text-sm font-medium text-cyan-300">
                Australia-Wide Industrial Automation Solutions
              </span>
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-tight lg:text-7xl">
              Better Controls.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
                Better Business.
              </span>
            </h1>

            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-gray-300">
              Custom control panels, RTU/PLC systems, skid-mounted packages,
              solar-powered automation and industrial hardware solutions built
              for Australia’s critical sectors.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/solutions"
                className="group flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600"
              >
                Explore Solutions
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <PlayCircle size={20} />
                Contact Our Team
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/25 to-transparent" />

            <img
              src={introImage}
              alt="Centralian Controls industrial automation systems"
              className="relative h-[420px] w-full rounded-3xl object-cover shadow-2xl lg:h-[520px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-6 shadow-xl sm:-right-6"
            >
              <p className="text-2xl font-bold text-[#1a1d23]">Automation</p>
              <p className="text-sm text-gray-500">Like never before</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}