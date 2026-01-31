"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { contactInfo } from "@/lib/data";

export default function SophisticatedContact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "general", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-28 md:py-36"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-3 text-[10px] font-body uppercase tracking-[0.35em] text-[#888]">
            Get In Touch
          </p>
          <h2
            className="font-display text-[#0a0a0a] leading-[1]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Let&rsquo;s <em className="text-[#888]">Connect</em>
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="font-display text-xl italic text-[#0a0a0a] mb-4 md:text-2xl">
              Inquiries Welcome
            </h3>
            <p className="text-[14px] font-body leading-relaxed text-[#666] mb-12 max-w-md">
              For artwork purchases, commissions, event bookings, or press inquiries.
            </p>

            {/* Email */}
            <div className="flex items-start gap-4 mb-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ddd]">
                <svg className="h-4 w-4 text-[#888]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-[#aaa] font-body mb-1">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-[14px] text-[#333] font-body hover:text-[#0a0a0a] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 mb-10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ddd]">
                <svg className="h-4 w-4 text-[#888]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-[#aaa] font-body mb-1">Gallery</p>
                <p className="text-[14px] text-[#333] font-body">{contactInfo.gallery}</p>
                <p className="text-[13px] text-[#888] font-body">{contactInfo.address}</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd] text-[#888] transition-all hover:border-[#888] hover:text-[#333]"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd] text-[#888] transition-all hover:border-[#888] hover:text-[#333]"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="soph-name"
                    className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[#888] font-body"
                  >
                    Name
                  </label>
                  <input
                    id="soph-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-[#ddd] bg-transparent px-0 py-3 text-[14px] text-[#0a0a0a] font-body outline-none transition-colors focus:border-[#0a0a0a] placeholder:text-[#ccc]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="soph-email"
                    className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[#888] font-body"
                  >
                    Email
                  </label>
                  <input
                    id="soph-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-[#ddd] bg-transparent px-0 py-3 text-[14px] text-[#0a0a0a] font-body outline-none transition-colors focus:border-[#0a0a0a] placeholder:text-[#ccc]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="soph-subject"
                  className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[#888] font-body"
                >
                  Subject
                </label>
                <select
                  id="soph-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-b border-[#ddd] bg-transparent px-0 py-3 text-[14px] text-[#0a0a0a] font-body outline-none transition-colors focus:border-[#0a0a0a] appearance-none"
                >
                  <option value="general">General Inquiry</option>
                  <option value="purchase">Art Purchase</option>
                  <option value="commission">Commission</option>
                  <option value="press">Press / Media</option>
                  <option value="event">Event / Speaking</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="soph-message"
                  className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-[#888] font-body"
                >
                  Message
                </label>
                <textarea
                  id="soph-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-[#ddd] bg-transparent px-0 py-3 text-[14px] text-[#0a0a0a] font-body outline-none transition-colors focus:border-[#0a0a0a] resize-none placeholder:text-[#ccc]"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="mt-4 inline-flex min-h-[48px] items-center justify-center border border-[#0a0a0a] bg-[#0a0a0a] px-10 py-3.5 text-[10px] font-body uppercase tracking-[0.25em] text-[#f5f5f5] transition-all duration-500 hover:bg-transparent hover:text-[#0a0a0a] disabled:opacity-50"
                aria-label="Send message"
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Sent
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
