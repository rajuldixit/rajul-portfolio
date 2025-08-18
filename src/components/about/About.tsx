"use client";

import React from "react";
import { motion } from "framer-motion";

const techStack = [
    "React.js", "Next.js", "Redux", "Node.js", "Express.js",
    "MongoDB", "GraphQL", "AWS", "Contentstack", "Cloudinary"
];

export default function About() {
    return (
        <section id="about" className="relative px-4 md:px-16 py-16 min-h-screen bg-white overflow-hidden">
            {/* Optional Background Shapes */}
            <motion.div
                className="absolute w-32 h-32 bg-blue-200 rounded-full opacity-20 -top-10 -left-10"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            />
            <motion.div
                className="absolute w-24 h-24 bg-purple-200 rounded-full opacity-20 -bottom-10 -right-5"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            />

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                {/* Left Column: Intro + Achievements */}
                <div className="flex-1 flex flex-col gap-6">
                    <motion.h2
                        className="text-3xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        I am a Full Stack Developer with 7+ years of experience, specializing in building responsive,
                        high-performance web applications. I combine cloud computing, frontend expertise, and Web3
                        knowledge to deliver seamless digital experiences.
                    </motion.p>

                    {/* Achievements */}
                    <motion.div
                        className="flex flex-wrap gap-6 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">7+ Years Experience</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">5+ Live Projects</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">2000+ Users Impacted</span>
                    </motion.div>
                </div>

                {/* Right Column: Tech Stack + Fun Fact */}
                <div className="flex-1 flex flex-col gap-6">
                    <motion.div
                        className="flex flex-wrap gap-2 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>

                    <motion.p
                        className="mt-6 text-gray-600 italic"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Strong collaborator in agile teams; passionate about mentoring and knowledge sharing.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
