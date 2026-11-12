import { motion } from "framer-motion";
import { Mail, AtSign, Send, ExternalLink } from "lucide-react";

const CONTACTS = [
  {
    icon: AtSign,
    label: "AtSign",
    value: "@wubeeditor",
    href: "https://www.instagram.com/wubeeditor/",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@grobuyer",
    href: "https://t.me/grobuyer",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Available on request",
    href: "mailto:hello@wubeeditor.com",
  },
  {
    icon: ExternalLink,
    label: "Upwork",
    value: "Currently Private",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-warm text-sm uppercase tracking-[0.2em] mb-3">
          Contact
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl">
          Let's create something cinematic.
        </h2>
        <p className="mt-6 text-zinc-400 text-lg max-w-xl">
          Available for freelance projects. Reach out on AtSign or Telegram
          and let's talk about your next edit.
        </p>

        <a
          href="https://www.instagram.com/wubeeditor/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-warm hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-full transition-colors"
        >
          Hire Me
        </a>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="p-6 rounded-2xl bg-charcoal border border-zinc-900 hover:border-warm/40 transition-colors group"
            >
              <c.icon className="w-5 h-5 text-warm mb-3" />
              <p className="text-xs uppercase tracking-widest text-zinc-500">
                {c.label}
              </p>
              <p className="mt-1 text-white group-hover:text-warm transition-colors">
                {c.value}
              </p>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
