"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Activity, CloudSun, TrendingUp, FlaskConical } from "lucide-react";
import { Project } from "@/lib/projects";
import React from "react";

// Map lucide string names to actual components dynamically
const IconMap: Record<string, React.ElementType> = {
    Activity,
    CloudSun,
    TrendingUp,
    FlaskConical
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
    const Icon = IconMap[project.icon] || Activity;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl glass-card overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30"
        >
            {/* Background Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-slate-300 group-hover:text-primary transition-colors duration-300" />
                    </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-medium text-slate-100 mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-6 flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Actions Footer */}
            <div className="relative z-10 flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-medium text-slate-200 transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                </a>

                <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    aria-label="View Source Code"
                >
                    <Github className="w-5 h-5" />
                </a>
            </div>
        </motion.div>
    );
}
