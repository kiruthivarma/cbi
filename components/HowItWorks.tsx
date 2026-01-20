"use client";

import { Section } from "./ui/Section";
import { Globe, ScanSearch, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: Globe,
        title: "Enter Competitor URL",
        description: "Drop your competitor's link. We start tracking immediately.",
    },
    {
        icon: ScanSearch,
        title: "Semantic Diffing",
        description: "Our LLM filters out noise (dates, typos) and detects visual swaps (banners, sales).",
    },
    {
        icon: ShieldAlert,
        title: "The Battle Card",
        description: "When they change pricing or messaging, you get a generated sales counter-pitch.",
    },
];

export function HowItWorks() {
    return (
        <Section id="how-it-works" className="py-24 bg-navy-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    How it Works
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Automated intelligence gathering that runs 24/7.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative bg-white/5 border border-white/5 rounded-xl p-8 hover:bg-white/10 transition-colors group"
                    >
                        {/* Progress Bar Segment */}
                        <div className="absolute top-0 left-8 right-8 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-neon-green/50 w-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>

                        <div className="w-12 h-12 bg-navy-950 border border-neon-green/30 rounded-lg flex items-center justify-center mb-6 text-neon-green shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                            <step.icon className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
