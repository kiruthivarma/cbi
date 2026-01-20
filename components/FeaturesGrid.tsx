"use client";

import { Section } from "./ui/Section";
import { BrainCircuit, Sword, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: BrainCircuit,
        title: "Semantic Diffing",
        valueProp: "Zero Noise.",
        description: "Uses LLM to compare text meaning, not just code. Filters out \"dates,\" \"cookies,\" and \"typos.\" Only alerts on meaningful changes (Price, Features).",
    },
    {
        icon: Sword,
        title: "The Battle Card",
        valueProp: "Action-Oriented.",
        description: "When a competitor changes pricing/messaging, the AI automatically updates your Notion or Excel in real-time. No updates missed, end-to-end automation.",
    },
    {
        icon: ImageIcon,
        title: "Visual Hashing",
        valueProp: "Catch Marketing Moves.",
        description: "Detects banner/image swaps (e.g., \"Summer Sale\" -> \"Black Friday\") without needing text changes. Sees what code misses.",
    },
];

export function FeaturesGrid() {
    return (
        <Section id="features" className="py-24 bg-navy-950">
            <div className="text-center mb-16 px-4">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-neon-green uppercase bg-neon-green/10 rounded-full border border-neon-green/20">
                    The "What"
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Adaptive Intelligence
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    The differentiator that separates signal from noise.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:border-neon-green/30"
                    >
                        <div className="w-14 h-14 bg-navy-950 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-neon-green/20">
                            <feature.icon className="w-7 h-7 text-neon-green" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <div className="text-neon-green font-mono text-sm mb-4 font-semibold tracking-wide">
                            {feature.valueProp}
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
