import { motion } from "framer-motion";
import PageHero from "../components/common/PageHero";

const cases = [
  "Remote solar-powered automation package",
  "RTU enclosure for field monitoring",
  "Chemical injection skid package",
  "Control panel assembly for industrial operations",
];

export default function CaseStudies() {
  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="Project examples that demonstrate capability"
        description="This section will showcase practical examples of Centralian Controls’ hardware packages and industry applications."
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:px-8">
          {cases.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="h-52 bg-gradient-to-br from-[#1a1d23] via-[#2d3748] to-cyan-900" />
              <div className="p-8">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
                  Project Example
                </p>
                <h2 className="text-2xl font-bold text-[#1a1d23]">{item}</h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  A future case study card can explain the challenge, hardware
                  package, industry context and outcome.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}