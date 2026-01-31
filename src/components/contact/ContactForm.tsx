"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
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
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-[10px] uppercase tracking-[0.15em] text-midnight/50 font-body"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-midnight/10 bg-warm-white px-4 py-3 text-sm text-midnight font-body outline-none transition-colors focus:border-teal/50 rounded-sm min-h-[44px]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-[10px] uppercase tracking-[0.15em] text-midnight/50 font-body"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-midnight/10 bg-warm-white px-4 py-3 text-sm text-midnight font-body outline-none transition-colors focus:border-teal/50 rounded-sm min-h-[44px]"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block text-[10px] uppercase tracking-[0.15em] text-midnight/50 font-body"
        >
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-midnight/10 bg-warm-white px-4 py-3 text-sm text-midnight font-body outline-none transition-colors focus:border-teal/50 rounded-sm appearance-none min-h-[44px]"
        >
          <option value="general">General Inquiry</option>
          <option value="purchase">Art Purchase</option>
          <option value="commission">Commission</option>
          <option value="press">Press / Media</option>
          <option value="event">Event / Speaking</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-[10px] uppercase tracking-[0.15em] text-midnight/50 font-body"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-midnight/10 bg-warm-white px-4 py-3 text-sm text-midnight font-body outline-none transition-colors focus:border-teal/50 rounded-sm resize-none"
          placeholder="Tell us about your inquiry..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitted}
        className="inline-flex min-h-[48px] items-center justify-center bg-teal px-8 py-3.5 text-[11px] font-body uppercase tracking-[0.2em] text-warm-white transition-all duration-300 hover:bg-teal-light disabled:opacity-60 rounded-sm"
        aria-label="Send message"
      >
        {submitted ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Sent!
          </motion.span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
