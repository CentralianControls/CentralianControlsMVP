import { motion } from "framer-motion";
import {
  Award,
  Building2,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import PageHero from "../components/common/PageHero";

import djokoImage from "../assets/team/dj-profile.jpg";
import markImage from "../assets/team/mark-profile.jpg";
import shaneImage from "../assets/team/shanet-profile.jpg";
import scottImage from "../assets/team/scott-profile.jpg";

const whatWeDo = [
  "Product supply and technical sales support",
  "Engineered systems and packaged solutions",
  "Automation, control, instrumentation and communications equipment",
  "Workshop assembly, fabrication and testing",
  "Support for end users, engineering companies and system integrators",
];

const whyUs = [
  "Purpose-built 3,250 square metre facility in Royal Park, South Australia",
  "Dedicated mechanical and electrical workshops",
  "Practical, fit-for-purpose industrial outcomes",
  "Quality-focused products and services",
  "Experience across automation, control and IIoT solutions",
];

const team = [
  {
    name: "Djoko Dobric (DJ)",
    role: "Managing Director",
    image: djokoImage,
  },
  {
    name: "Mark Edwards",
    role: "Director | Engineering Manager",
    image: markImage,
  },
  {
    name: "Shane Tucker",
    role: "Manager - Energy",
    image: shaneImage,
  },
  {
    name: "Scott Haddow",
    role: "Manager - Industries",
    image: scottImage,
  },
];

const certifications = [
  {
    title: "Quality Certification",
    standard: "ISO 9001:2015",
  },
  {
    title: "Environmental Certification",
    standard: "ISO 14001:2015",
  },
  {
    title: "Safety Certification",
    standard: "ISO 45001:2018",
  },
];

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About Centralian Controls"
        title="Control, automation and IIoT solutions for Australian industry"
        description="Centralian Controls supports customers with product supply, engineered systems, technical guidance and workshop-built industrial solutions from its Royal Park facility in South Australia."
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              Who We Are
            </p>
            <h2 className="text-4xl font-bold leading-tight text-[#1a1d23] lg:text-5xl">
              Built around practical industrial outcomes.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Centralian Controls works closely with customers to understand
              their applications, identify challenges and support practical,
              fit-for-purpose outcomes.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              The company provides both product supply and engineered solutions,
              working alongside end users, engineering companies and system
              integrators to help select and apply the right technologies within
              each project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-[#1a1d23] to-[#2d3748] p-8 text-white shadow-2xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-400">
              <Building2 size={32} />
            </div>
            <h3 className="text-3xl font-bold">Royal Park Facility</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Centralian Controls operates from a purpose-built 3,250 square
              metre facility in Royal Park, South Australia, with dedicated
              mechanical and electrical workshops for fabrication, assembly and
              testing of engineered systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-3xl"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              What We Do
            </p>
            <h2 className="text-4xl font-bold text-[#1a1d23] lg:text-5xl">
              Products and packaged solutions.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Centralian Controls combines technical sales, product knowledge
              and engineered package capability to support reliable industrial
              project delivery.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white">
                  <Wrench size={24} />
                </div>
                <p className="font-semibold leading-relaxed text-[#1a1d23]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              Why Us
            </p>
            <h2 className="text-4xl font-bold text-[#1a1d23] lg:text-5xl">
              Quality, capability and practical support.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Centralian Controls supports industry with reliable product
              selection, engineered packages, assembly capability and a strong
              commitment to quality, safety and environmental standards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gray-50 p-8"
          >
            <div className="space-y-4">
              {whyUs.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-cyan-500" />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1a1d23] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Our Team
            </p>
            <h2 className="text-4xl font-bold lg:text-5xl">
              Industry experts leading the business.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">
              Centralian Controls is led by experienced professionals across
              business leadership, engineering, energy and industrial sectors.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-80 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-cyan-300">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-relaxed text-gray-300">
            Supported by a multidisciplinary team of engineers, technicians,
            project managers, workshop personnel and technical sales
            specialists.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              Certifications
            </p>
            <h2 className="text-4xl font-bold text-[#1a1d23] lg:text-5xl">
              Committed to industry standards.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
              Centralian Controls is committed to providing quality products and
              services backed by quality, environmental and safety
              certifications.
            </p>
          </motion.div>

          <div className="grid gap-7 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.standard}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-400 text-white">
                  {index === 0 ? (
                    <Award size={30} />
                  ) : index === 1 ? (
                    <Factory size={30} />
                  ) : (
                    <ShieldCheck size={30} />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1d23]">
                  {cert.title}
                </h3>
                <p className="mt-3 text-lg font-semibold text-cyan-500">
                  {cert.standard}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}