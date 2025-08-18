"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const skills = ["React.js", "Node.js", "Web3", "Cloud"];

export default function Hero() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 px-4 md:px-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">

            {/* Floating Background Shapes */}
            <motion.div
                className="absolute w-40 h-40 bg-blue-200 rounded-full opacity-20 -top-10 -left-10"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            />
            <motion.div
                className="absolute w-32 h-32 bg-purple-200 rounded-full opacity-20 -bottom-10 -right-5"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
            />

            {/* Profile Photo */}
            <motion.div
                className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-primary z-10"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
            >
                <Image src="/profile.jpeg" alt="Rajul Dixit" fill className="object-cover" />
            </motion.div>

            {/* Info */}
            <motion.div
                className="flex flex-col text-center md:text-left gap-4 z-10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
                }}
            >
                {/* Name */}
                <motion.h1
                    className="text-4xl font-bold"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    Rajul Dixit
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    className="text-lg text-blue-600 font-medium"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    Bridging Cloud Computing, Web3, and Frontend Development
                </motion.p>

                {/* Typing Effect */}
                <motion.p
                    className="text-lg text-muted-foreground"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    <Typewriter
                        words={["Cloud Computing Student", "Frontend Developer", "Web3 Enthusiast"]}
                        loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={20}
                        delaySpeed={1500}
                    />
                </motion.p>

                {/* Skill Badges */}
                <motion.div
                    className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    <Button onClick={() => scrollToSection("about")} variant="default">
                        About
                    </Button>
                    <Button onClick={() => scrollToSection("projects")} variant="default">
                        Projects
                    </Button>
                    <Button onClick={() => scrollToSection("contact")} variant="default">
                        Contact
                    </Button>
                    <Button asChild variant="outline">
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </Button>
                    <Button asChild variant="default">
                        <a href="https://github.com/rajuldixit" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </Button>
                </motion.div>

                {/* Achievement Snapshot */}
                <motion.div
                    className="mt-4 text-sm text-gray-600 flex flex-wrap gap-6 justify-center md:justify-start"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    <span>7+ Years Experience</span>
                    <span>5+ Live Projects</span>
                    <span>2000+ Users Impacted</span>
                </motion.div>
            </motion.div>

            {/* Scroll Down Indicator
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => scrollToSection("about")}
      >
        <span className="w-1 h-6 bg-gray-400 rounded-full"></span>
        <span className="text-gray-500 text-sm">Scroll Down</span>
      </motion.div> */}
        </section>
    );
}
