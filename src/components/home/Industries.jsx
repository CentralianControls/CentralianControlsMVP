import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Droplet,
  Mountain,
  Waves,
  Factory,
  Wheat,
  Wind,
  Building2,
  Shield,
} from "lucide-react";

const industries = [
  { icon: Droplet, name: "Oil & Gas" },
  { icon: Mountain, name: "Mining & Minerals" },
  { icon: Waves, name: "Utilities & Water" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Wheat, name: "Agriculture" },
  { icon: Wind, name: "Renewables" },
  { icon: Building2, name: "Infrastructure" },
  { icon: Shield, name: "Aerospace & Defence" },
];

export default function Industries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
            Industries
          </p>
          <h2 className="mb-4 text-4xl font-bold text-[#1a1d23] lg:text-5xl">
            Trusted across critical industrial sectors
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Supporting industrial clients with practical, reliable automation
            hardware for demanding Australian environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to="/solutions"
                  className="group block h-full rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white hover:shadow-xl"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-400 text-white transition-transform group-hover:scale-110">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-semibold text-[#1a1d23]">
                    {industry.name}
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}