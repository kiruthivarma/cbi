import Link from "next/link";
import { Section } from "./ui/Section";

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-navy-950/80 backdrop-blur-md border-b border-white/5">
            <Section className="!py-4 flex justify-between items-center">
                <div className="font-bold text-xl tracking-tight text-white">
                    <span className="opacity-90">Hywik</span>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="#features" className="hover:text-neon-green transition-colors">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="hover:text-neon-green transition-colors">
                        How it Works
                    </Link>
                </nav>

                <button className="bg-neon-green text-navy-950 font-semibold px-5 py-2 rounded-full text-sm hover:bg-green-400 transition-all hover:scale-105 active:scale-95">
                    Get Early Access
                </button>
            </Section>
        </header>
    );
}
