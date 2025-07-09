import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import  { useState } from "react";
import axios from "axios";


const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("https://skportfolio-1.onrender.com/send", form);
      setStatus(res.data);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Failed to send.");
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-20 text-white z-10">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-orange-400 mb-16 border-l-8 border-orange-400 pl-4"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 py-24"
        >
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-orange-400 text-xl" />
            <p>kechesarthak412@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-orange-400 text-xl" />
            <p>+91 8830286448</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-orange-400 text-xl" />
            <p>Pune, Maharashtra, India</p>
          </div>

          <p className="mt-6 text-gray-300 leading-relaxed">
            I’m open to freelance, internships, collaborations, or just a good conversation about tech.
            Drop me a message — I’ll get back to you as soon as possible!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg space-y-6"
    >
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-md bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-md bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows="5"
        placeholder="Your Message"
        className="w-full px-4 py-3 rounded-md bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400 resize-none"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md text-white font-semibold transition"
      >
        Send Message
      </button>
      <p className="text-sm text-gray-300 text-center">{status}</p>
    </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
