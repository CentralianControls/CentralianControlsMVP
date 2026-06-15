import { motion } from "framer-motion";
import { MessageSquare, PenTool, Hammer, FlaskConical, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Understand the project, site needs and hardware requirements.",
  },
  {
    icon: PenTool,
    title: "Planning",
    description: "Confirm specifications, components and build approach.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Assemble panels, enclosures and packages in the workshop.",
  },
  {
    icon: FlaskConical,
    title: "Testing & QA",
    description: "Quality-check hardware before it is prepared for delivery.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Supply ready-to-deploy hardware foundations to project teams.",
  },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
            Process
          </p>
          <h2 className="mb-4 text-4xl font-bold text-[#1a1d23] lg:text-5xl">
            From enquiry to ready-to-deploy hardware
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            A clear process designed to reduce risk and support smooth project
            delivery.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-500 lg:block" />

          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-cyan-500 bg-white shadow-lg">
                    <Icon className="text-cyan-500" size={32} />
                  </div>

                  <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-[-18px] -translate-y-2 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-sky-400 text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-[#1a1d23]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}