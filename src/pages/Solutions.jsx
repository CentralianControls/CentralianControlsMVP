import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { solutions } from "../data/solutionsData";

export default function Solutions() {
  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title="Engineered solutions, proven applications, delivered ready"
        description="Explore Centralian Controls’ application-specific solutions across control panels, skid packages, remote monitoring, power systems, water infrastructure and industrial field applications."
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
                Practical implementation
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#1a1d23] lg:text-5xl">
                Built around real project requirements, not generic packages.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                Centralian Controls brings together control, instrumentation,
                communications and power technologies into coordinated solutions
                prepared for efficient installation.
              </p>
              <p>
                The focus is practical build quality, reliable execution and
                support for customers, system integrators and engineering
                companies.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className="group block h-full rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-400 text-white transition-transform group-hover:scale-110">
                      <Icon size={32} />
                    </div>

                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-500">
                      {solution.category}
                    </p>

                    <h2 className="mb-3 text-2xl font-bold text-[#1a1d23]">
                      {solution.title}
                    </h2>

                    <p className="mb-6 leading-relaxed text-gray-600">
                      {solution.shortDescription}
                    </p>

                    <span className="inline-flex items-center gap-2 font-semibold text-cyan-500 transition-all group-hover:gap-3">
                      View Solution <span>→</span>
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}