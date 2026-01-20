"use client";

import { motion } from "framer-motion";

export function NotificationBar() {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 w-full z-50 bg-navy-950/90 backdrop-blur-md border-b border-neon-green/20 text-neon-green py-2.5 font-medium text-center text-sm"
        >
            ✨ Get early access now!
        </motion.div>
    );
}
