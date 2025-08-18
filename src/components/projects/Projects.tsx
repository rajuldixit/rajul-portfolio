"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Express Fashion E-commerce",
        description: "Enhanced the e-commerce platform for Express, USA, integrating Contentstack CMS and Cloudinary for digital asset management. Optimized UI/UX and site performance for seamless shopping.",
        tech: ["React.js", "Contentstack", "Cloudinary"],
        link: "#",
    },
    {
        title: "Spiritwave Web Applications",
        description: "Developed high-performance interactive web apps and integrated with GraphQL APIs to improve data handling and efficiency.",
        tech: ["React.js", "Redux", "GraphQL"],
        link: "#",
    },
    {
        title: "RBS Digital Banking",
        description: "Delivered critical front-end solutions for NatWest/RBS platforms using Micro-Frontend architecture. Ensured seamless UI/UX implementation and accessibility compliance.",
        tech: ["React.js", "Ramda", "Redux", "Micro-Frontend"],
        link: "#",
    },
    {
        title: "Enterprise Web Apps (Capita & Hyperstate)",
        description: "Maintained and enhanced enterprise web applications with Angular & React.js, developed reusable component libraries, and integrated third-party APIs securely.",
        tech: ["Angular", "React.js", "Redux", "D3.js"],
        link: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="px-4 md:px-16 py-16 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto flex flex-col gap-12">
                {/* Title */}
                <motion.h2
                    className="text-3xl font-bold text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Projects
                </motion.h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full hover:shadow-xl transition-shadow cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="flex flex-col items-center text-center">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <div className="mt-4">
                                        <Button asChild variant="outline">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                View Project
                                            </a>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
}
