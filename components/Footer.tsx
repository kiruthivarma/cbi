import { Section } from "./ui/Section";
import { Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-navy-950 border-t border-white/5 py-12">
            <Section className="!py-0 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} CompetitorSpy. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <Link href="#" className="text-gray-500 hover:text-neon-green transition-colors">
                        <Twitter className="w-5 h-5" />
                    </Link>
                    <Link href="mailto:hello@competitorspy.com" className="text-gray-500 hover:text-neon-green transition-colors">
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>
            </Section>
        </footer>
    );
}
