import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Radio, Wifi, Zap, Monitor, Package } from "lucide-react";

const solutions = [
  {
    icon: Cpu,
    title: "Custom Control Panels",
    description:
      "Purpose-built industrial control panels assembled, configured and tested for reliable site deployment.",
  },
  {
    icon: Radio,
    title: "RTU / PLC Systems",
    description:
      "Remote terminal units and PLC-based hardware packages prepared for automation and monitoring applications.",
  },
  {
    icon: Wifi,
    title: "Telemetry & Communications",
    description:
      "Industrial networking, remote connectivity and telemetry hardware for critical field environments.",
  },
  {
    icon: Zap,
    title: "Solar-Powered Packages",
    description:
      "Standalone solar-powered automation and control packages for remote industrial operations.",
  },
  {
    icon: Monitor,
    title: "SCADA & Monitoring Hardware",
    description:
      "Control system hardware foundations that support SCADA, historian and remote monitoring environments.",
  },
  {
    icon: Package,
    title: "Skid-Mounted Systems",
    description:
      "Pre-built, pre-tested skid-mounted packages including chemical injection and cathodic protection systems.",
  },
];

export default function HomeSolutions() {
  return (
    <section id="solutions" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
            Solutions
          </p>
          <h2 className="mb-4 text-4xl font-bold text-[#1a1d23] lg:text-5xl">
            Comprehensive Industrial Solutions
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Workshop-built automation hardware and turnkey packages that help
            reduce project risk, installation time and commissioning effort.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  to="/solutions"
                  className="group block h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-sky-400/10 transition-transform group-hover:scale-110">
                    <Icon className="text-cyan-500" size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-[#1a1d23]">
                    {solution.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600">
                    {solution.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 font-medium text-cyan-500 transition-all group-hover:gap-3">
                    Learn More <span>→</span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}