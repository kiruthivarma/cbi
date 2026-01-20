import clsx from "clsx";
import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx(
                "py-16 px-6 md:px-12 max-w-7xl mx-auto w-full",
                className
            )}
        >
            {children}
        </section>
    );
}
