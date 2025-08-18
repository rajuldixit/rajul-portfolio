"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            setError("Please fill in all fields.");
            return;
        }
        setError("");
        setSuccess(true);
        // Here you can integrate an email API like EmailJS or your backend
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="max-w-4xl mx-auto px-4 py-20 flex flex-col gap-10">
            <motion.h2
                className="text-3xl font-bold text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contact Me
            </motion.h2>

            <motion.p
                className="text-gray-700 text-lg text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                I’m always open to exciting projects, collaborations, or tech discussions.
                Feel free to reach out via email or send me a message using the form below!
            </motion.p>

            <motion.form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">Message sent successfully!</p>}

                <Button type="submit" className="w-fit px-6 py-3 mt-2">
                    Send Message
                </Button>
            </motion.form>

            {/* Optional Contact Info */}
            <motion.div
                className="mt-6 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <p><strong>Email:</strong> rajul786dixit@gmail.com</p>
                <p><strong>Phone:</strong> +91 7017863201</p>
                <p><strong>Location:</strong> Dublin, Ireland / India</p>
            </motion.div>
        </section>
    );
}
