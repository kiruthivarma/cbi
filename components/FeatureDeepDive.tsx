"use client";

import { Section } from "./ui/Section";
import { CheckCircle2, TrendingUp, Zap, Radio } from "lucide-react";
import { motion } from "framer-motion";

const signals = [
    {
        title: "Hiring Enterprise Reps",
        signal: "Moving Up-Market",
        icon: TrendingUp,
        color: "text-blue-400",
    },
    {
        title: "New API Endpoint",
        signal: "Feature Launch",
        icon: Zap,
        color: "text-amber-400",
    },
    {
        title: "SSO Setup Guide",
        signal: "Enterprise Focus",
        icon: CheckCircle2,
        color: "text-green-400",
    },
];

export function FeatureDeepDive() {
    return (
        <Section className="py-24">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                {/* Sticky Left Content */}
                <div className="md:sticky md:top-32 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-green/10 text-neon-green text-xs font-medium border border-neon-green/20">
                        <Radio className="w-3 h-3 animate-pulse" />
                        Live Monitoring
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        High-Frequency <br />
                        Monitoring
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        We don't just track price changes. We detect subtle shifts in strategy by monitoring hiring pages, API docs, and help centers.
                    </p>
                </div>

                {/* Right Content - Signals List */}
                <div className="space-y-6">
                    {signals.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-4 hover:border-white/20 transition-all"
                        >
                            <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                                    Signal: <span className={item.color}>{item.signal}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
