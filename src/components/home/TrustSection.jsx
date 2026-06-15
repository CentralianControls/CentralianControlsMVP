import { motion } from "framer-motion";
import { Award, MapPin, Factory, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Award, value: "35+", label: "Years Experience" },
  { icon: MapPin, value: "Australia", label: "Wide Support" },
  { icon: Factory, value: "8+", label: "Industries Served" },
  { icon: ShieldCheck, value: "QA", label: "Tested Hardware" },
];

export default function TrustSection() {
  return (
    <section className="border-b border-gray-200 bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-2xl p-6 text-center transition hover:bg-gray-50"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-sky-400 text-white transition-transform group-hover:scale-110">
                <Icon size={28} />
              </div>
              <h3 className="mb-2 text-3xl font-bold text-[#1a1d23]">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}