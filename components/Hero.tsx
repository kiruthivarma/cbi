"use client";

import { Section } from "./ui/Section";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export function Hero() {
    return (
        <Section className="pt-32 pb-20 md:pt-40 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6">
                        The AI Spy that turns <br className="hidden lg:block" />
                        <span className="text-neon-green">competitor updates</span> <br />
                        into actionable strategy.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                        Stop getting spammed with pixel changes. Get a weekly Battle Report that tells you exactly what changed—and how to react.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <form
                        action="https://formsubmit.co/your-email@example.com"
                        method="POST"
                        className="flex flex-col sm:flex-row gap-3 max-w-md"
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your work email"
                            required
                            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-neon-green transition-colors"
                        />
                        <button
                            type="submit"
                            className="bg-neon-green text-navy-950 font-bold px-6 py-3 rounded-lg hover:bg-green-400 transition-all flex items-center justify-center gap-2"
                        >
                            Join Waitlist
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                </motion.div>
            </div>

            {/* Right Visual - Code Diff */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-green/20 to-blue-500/20 rounded-xl blur-2xl opacity-50" />
                <div className="relative bg-navy-950/90 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
                    {/* Fake Browser Header */}
                    <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        <div className="ml-2 text-xs text-gray-500 font-mono">competitor.com/pricing</div>
                    </div>

                    <div className="p-6 font-mono text-sm space-y-4">
                        {/* Context Line */}
                        <div className="text-gray-500">
                            <span className="inline-block w-6 select-none opacity-50">12</span>
                            <span>&lt;div class=&quot;pricing-card&quot;&gt;</span>
                        </div>

                        {/* Removed Line */}
                        <div className="relative bg-red-500/10 -mx-6 px-6 py-1 border-l-2 border-red-500/50">
                            <span className="inline-block w-6 select-none text-red-500/50">-</span>
                            <span className="text-gray-400">price: </span>
                            <span className="text-red-400 line-through">$29</span>
                        </div>

                        {/* Added Line */}
                        <div className="relative bg-green-500/10 -mx-6 px-6 py-1 border-l-2 border-neon-green">
                            <span className="inline-block w-6 select-none text-neon-green">+</span>
                            <span className="text-gray-400">price: </span>
                            <span className="text-neon-green font-bold">$49</span>
                        </div>

                        {/* Context Line */}
                        <div className="text-gray-500">
                            <span className="inline-block w-6 select-none opacity-50">15</span>
                            <span>&lt;/div&gt;</span>
                        </div>

                        <div className="mt-6 p-3 bg-neon-green/10 border border-neon-green/20 rounded text-xs text-neon-green flex items-start gap-2">
                            <Check className="w-4 h-4 shrink-0 mt-0.5" />
                            <div>
                                <span className="font-bold">Insight:</span> Competitor raised prices by 68%.
                                <br />Signal: High confidence in PMF.
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
