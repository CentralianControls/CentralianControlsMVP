import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import { products } from "../data/productsData";

export default function Products() {
  return (
    <main>
      <PageHero
        eyebrow="Products"
        title="Industrial technology for automation, control and protection"
        description="Browse Centralian Controls’ product categories across automation, SCADA, communications, motor control, hazardous area equipment, pipeline protection and remote monitoring."
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-4xl"
          >
            <p className="text-lg leading-relaxed text-gray-600">
              Centralian Controls provides industrial technologies spanning
              automation, control, communications, power distribution and asset
              protection. These product categories are selected for demanding
              industrial environments and practical project delivery.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    to={`/products/${product.slug}`}
                    className="group block h-full rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-400 text-white transition-transform group-hover:scale-110">
                      <Icon size={32} />
                    </div>

                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-500">
                      {product.category}
                    </p>

                    <h2 className="mb-3 text-2xl font-bold text-[#1a1d23]">
                      {product.title}
                    </h2>

                    <p className="mb-6 leading-relaxed text-gray-600">
                      {product.shortDescription}
                    </p>

                    <span className="inline-flex items-center gap-2 font-semibold text-cyan-500 transition-all group-hover:gap-3">
                      View Product Category <span>→</span>
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