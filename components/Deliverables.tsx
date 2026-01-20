"use client";

import { Section } from "./ui/Section";
import { FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Deliverables() {
    return (
        <Section className="py-24 border-t border-white/5">
            <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
                    The Output
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Intelligence you can act on.
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Agency Report */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-start gap-6 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-neon-green/20 transition-colors" />

                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Agency White-Label Report</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            A branded PDF ("Weekly Intelligence Brief") that agencies can forward directly to their clients.
                        </p>
                    </div>
                </motion.div>

                {/* Weekly Digest */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-start gap-6 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-colors" />

                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Weekly Digest Email</h3>
                        <p className="text-gray-400 leading-relaxed">
                            A summary of the top 3 moves competitors made this week. Zero fluff, just the most critical updates.
                        </p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
