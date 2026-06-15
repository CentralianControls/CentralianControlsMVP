import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1d23] via-[#2d3748] to-[#1a1d23] px-6 py-28 text-white">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14,165,233,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14,165,233,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          {eyebrow}
        </p>
        <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">
          {description}
        </p>
      </motion.div>
    </section>
  );
}