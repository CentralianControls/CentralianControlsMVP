import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { brands } from "../data/brandsData";

export default function Brands() {
  return (
    <main>
      <PageHero
        eyebrow="Our Brands"
        title="Trusted global brands for industrial solutions"
        description="Centralian Controls represents a strong group of industrial technology partners, helping customers access proven products backed by technical guidance, reliability and responsive local support."
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
                Quality. Reliability. Collaboration.
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#1a1d23] lg:text-5xl">
                Global technologies, supported with practical local expertise.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                Through trusted partnerships, Centralian Controls delivers
                high-quality products that support reliable and efficient
                industrial operations across Australia.
              </p>
              <p>
                The focus goes beyond supply, with technical guidance, tailored
                support and responsive service to help customers select suitable
                products for demanding environments.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <Link
                  to={`/brands/${brand.slug}`}
                  className="group block h-full rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
                >
                  <div className="mb-6 flex h-20 w-full items-center justify-center rounded-2xl bg-white px-5 shadow-sm">
                    <span className="text-center text-2xl font-bold text-[#1a1d23]">
                      {brand.name}
                    </span>
                  </div>

                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-500">
                    {brand.category}
                  </p>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    {brand.description}
                  </p>

                  <span className="inline-flex items-center gap-2 font-semibold text-cyan-500 transition-all group-hover:gap-3">
                    View Brand <span>→</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}