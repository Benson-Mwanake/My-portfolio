import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Computer, Link, Mail, Phone } from "lucide-react";
import { sendEmail } from "../services/emailService";


const socials = [
  {
    icon: Computer,
    label: "GitHub",
    href: "https://github.com/Benson-Mwanake",
    handle: "Benson-Mwanake",
  },
  {
    icon: Link,
    label: "LinkedIn",
    href: "https://linkedin.com",
    handle: "benson-mwanake",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:bensonmwanake79@gmail.com",
    handle: "bensonmwanake79@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+254706444363",
    handle: "+254 706 444 363",
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess(false);
    }, 5000); // 10 seconds

    return () => clearTimeout(timer);
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await sendEmail(formState);
      console.log("SUCCESS:", res.status, res.text);

      setSuccess(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("FAILED:", error.text || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-28 px-6 bg-black text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 className="text-5xl md:text-7xl font-black mb-6">
          Let's Build <br />
          <span className="text-primary">Together</span>
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mb-16 text-lg">
          Got an idea? Let’s turn it into something real.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              placeholder="Name"
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-4 outline-none focus:border-primary"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-4 outline-none focus:border-primary"
              required
            />

            <textarea
              rows={5}
              placeholder="Message"
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-4 outline-none resize-none focus:border-primary"
              required
            />

            <motion.button
              type="submit"
              disabled={loading}
              className="px-10 py-4 bg-primary text-white font-bold disabled:opacity-50"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && (
              <p className="text-primary text-sm">
                Message sent successfully.
              </p>
            )}
          </form>

          {/* SOCIALS */}
          <div className="space-y-6">
            <p className="text-gray-500 uppercase tracking-widest text-sm">
              Direct Links
            </p>

            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                className="flex items-center gap-4 border-b border-zinc-800 py-4 hover:border-primary transition"
                whileHover={{ x: 8 }}
              >
                <social.icon className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-500">{social.label}</p>
                  <p className="font-medium">{social.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
