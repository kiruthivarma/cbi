"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";

export function NoNewsSection() {
    return (
        <section className="bg-navy-950 border-y border-white/5 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-neon-green/5 to-navy-950" />

            <Section className="py-24 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Silence is also a signal.
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        If nothing changes, we send a <span className="text-neon-green font-mono">"No News"</span> report.
                        <br className="hidden md:block" />
                        Competitor stagnant? Perfect time to attack.
                    </p>
                </motion.div>
            </Section>
        </section>
    );
}
