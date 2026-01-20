"use client";

import { motion } from "framer-motion";

export function NotificationBar() {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 w-full z-50 bg-neon-green text-navy-950 py-3 font-bold text-center uppercase tracking-wider text-sm shadow-lg shadow-neon-green/20"
        >
            Get early access now!
        </motion.div>
    );
}
