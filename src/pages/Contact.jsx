import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import PageHero from "../components/common/PageHero";

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with Centralian Controls"
        description="Contact the team for product enquiries, technical support, project discussions, sales support, careers or general feedback."
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
                Centralian Controls
              </p>
              <h2 className="text-4xl font-bold text-[#1a1d23]">
                Servicing all states of Australia
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Use the enquiry form to contact Centralian Controls about
                products, solutions, support or general business enquiries.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Phone className="text-cyan-500" />
                  <h3 className="text-xl font-bold text-[#1a1d23]">Call Us</h3>
                </div>
                <p className="text-gray-700">(08) 8300 3500</p>
                <p className="mt-1 text-gray-700">
                  International: +61 8 8300 3500
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Mail className="text-cyan-500" />
                  <h3 className="text-xl font-bold text-[#1a1d23]">Email Us</h3>
                </div>
                <p className="text-gray-700">webquery@centralian.com.au</p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <MapPin className="text-cyan-500" />
                  <h3 className="text-xl font-bold text-[#1a1d23]">Address</h3>
                </div>
                <p className="text-gray-700">Unit 2, 6-7 Schenker Drive</p>
                <p className="text-gray-700">Royal Park, South Australia 5014</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm"
          >
            <div className="mb-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
                Enquiry Form
              </p>
              <h2 className="text-3xl font-bold text-[#1a1d23]">
                Tell us how we can help
              </h2>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                  placeholder="Name *"
                />
                <input
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                  placeholder="Email *"
                />
              </div>

              <input
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                placeholder="Phone"
              />

              <select className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10">
                <option>Choose Enquiry Type *</option>
                <option>General</option>
                <option>Sales</option>
                <option>Technical Support</option>
                <option>Careers</option>
                <option>Feedback</option>
              </select>

              <textarea
                className="min-h-40 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
                placeholder="Message *"
              />

              <label className="flex items-start gap-3 text-sm text-gray-600">
                <input type="checkbox" className="mt-1" />
                <span>Sign up to receive newsletter, insights and updates.</span>
              </label>

              <button
                type="button"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-xl"
              >
                Submit Enquiry
                <Send size={20} className="transition group-hover:translate-x-1" />
              </button>

            </form>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1a1d23] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 lg:px-8">
          {[
            "General product enquiries",
            "Sales and technical support",
            "Project and solution discussions",
          ].map((item) => (
            <div key={item} className="flex gap-3">
              <CheckCircle2 className="mt-1 shrink-0 text-cyan-400" />
              <p className="text-lg text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}