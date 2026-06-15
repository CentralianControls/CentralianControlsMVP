import { motion } from "framer-motion";
import { Settings, Wrench, GraduationCap, Headphones } from "lucide-react";
import whyUsImage from "../../assets/images/why-us-feature.png";

const features = [
  {
    icon: Settings,
    title: "Custom-built hardware",
    description:
      "Systems are prepared around project needs instead of relying only on off-the-shelf layouts.",
  },
  {
    icon: Wrench,
    title: "Workshop tested",
    description:
      "Panels and packages are assembled and quality-checked before delivery to reduce site risk.",
  },
  {
    icon: GraduationCap,
    title: "Technical product knowledge",
    description:
      "Application advice and technical support help clients select suitable industrial technology.",
  },
  {
    icon: Headphones,
    title: "Partner-focused support",
    description:
      "Centralian complements integrators and engineering teams by supplying reliable hardware foundations.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1d23] to-[#2d3748] py-24 text-white">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Why Choose Us
          </p>
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
            Reliable hardware foundations for complex industrial projects
          </h2>
          <p className="text-xl leading-relaxed text-gray-300">
            Centralian Controls helps clients and project partners reduce
            uncertainty by preparing ready-to-deploy industrial hardware.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-7">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-sky-400">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/25 to-transparent" />

            <img
              src={whyUsImage}
              alt="Centralian Controls industrial engineering and workshop capability"
              className="relative h-[460px] w-full rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}