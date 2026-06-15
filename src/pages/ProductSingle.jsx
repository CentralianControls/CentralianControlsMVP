import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Layers, Sparkles } from "lucide-react";
import { getProductBySlug } from "../data/productsData";

export default function ProductSingle() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-white px-6 py-32 text-center">
        <h1 className="text-5xl font-bold text-[#1a1d23]">
          Product Not Found
        </h1>
        <Link
          to="/products"
          className="mt-8 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white"
        >
          Back to Products
        </Link>
      </main>
    );
  }

  const Icon = product.icon;

  return (
    <main>
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

        <div className="relative mx-auto max-w-7xl lg:px-8">
          <Link
            to="/products"
            className="mb-10 inline-flex items-center gap-2 text-cyan-300 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
          >
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                {product.category}
              </p>

              <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
                {product.title}
              </h1>

              <h2 className="mt-5 text-2xl font-semibold text-cyan-300">
                {product.headline}
              </h2>

              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-300">
                {product.description}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-sm"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-400">
                <Icon size={38} />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Product Category
              </p>
              <p className="mt-3 text-3xl font-bold">{product.title}</p>
              <p className="mt-4 leading-relaxed text-gray-300">
                {product.category}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              Overview
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#1a1d23]">
              Industrial product solutions supported by Centralian Controls.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-600">
              {product.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              Enquire About This Product
            </Link>
          </motion.div>

          <div className="space-y-7">
            {product.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-8"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1d23]">
                    {section.title}
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 shrink-0 text-cyan-500" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              Why Centralian
            </p>
            <h2 className="text-4xl font-bold text-[#1a1d23]">
              Product knowledge with practical industrial support.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Centralian Controls supports customers with product selection,
              procurement, application suitability and long-term industrial
              support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-sm"
          >
            <div className="space-y-4">
              {product.whyCentralian.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-cyan-500" />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-cyan-500 to-sky-400 px-6 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <Sparkles className="mx-auto mb-5" size={38} />
          <h2 className="text-4xl font-bold lg:text-5xl">Let’s Talk</h2>
          <p className="mx-auto mt-5 max-w-2xl text-xl leading-relaxed text-white/90">
            {product.cta}
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-bold text-[#1a1d23] transition hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Our Team
          </Link>
        </motion.div>
      </section>
    </main>
  );
}