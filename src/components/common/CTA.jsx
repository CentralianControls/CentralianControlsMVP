import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0ea5e9] to-[#06b6d4] px-6 py-24 text-white">
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)
            `,
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold lg:text-6xl">
          Ready to discuss your next industrial project?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/90">
          Send an enquiry and help the team understand your project, industry
          and hardware requirements.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-[#1a1d23] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Start an Enquiry
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/solutions"
            className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            View Solutions
          </Link>
        </div>
      </motion.div>
    </section>
  );
}