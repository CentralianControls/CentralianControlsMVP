import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Server, Gauge, Network, Shield, Camera, Sun } from "lucide-react";

const products = [
  {
    icon: Server,
    title: "PLCs, HMIs & RTUs",
    description:
      "Automation control hardware for monitoring, sequencing and remote field control.",
  },
  {
    icon: Gauge,
    title: "Instrumentation",
    description:
      "Pressure, flow, temperature, level and hazardous-area measurement devices.",
  },
  {
    icon: Network,
    title: "Industrial Communications",
    description:
      "Telemetry, networking and remote connectivity solutions for field environments.",
  },
  {
    icon: Shield,
    title: "ICS / OT Cybersecurity",
    description:
      "Industrial network protection tools for control system environments.",
  },
  {
    icon: Camera,
    title: "Industrial Cameras",
    description:
      "Rugged camera systems for hazardous, remote and outdoor industrial sites.",
  },
  {
    icon: Sun,
    title: "Renewable Components",
    description:
      "Solar systems and power integration hardware for remote operations.",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
            Products
          </p>
          <h2 className="mb-4 text-4xl font-bold text-[#1a1d23] lg:text-5xl">
            Industrial products and technology partnerships
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            A broad product portfolio covering automation, control,
            instrumentation, communications, safety and renewable energy.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  to="/products"
                  className="group block h-full rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-400 text-white transition-transform group-hover:scale-110">
                    <Icon size={32} />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-[#1a1d23]">
                    {product.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {product.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}