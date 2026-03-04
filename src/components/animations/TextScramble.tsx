"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface TextScrambleProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "p" | "span";
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

export default function TextScramble({
    text,
    className = "",
    as: Tag = "h2",
}: TextScrambleProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [display, setDisplay] = useState(text);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (!isInView || hasAnimated) return;
        setHasAnimated(true);

        let frame = 0;
        const totalFrames = 20;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((char, i) => {
                        if (char === " ") return " ";
                        if (frame / totalFrames > i / text.length) return text[i];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );
            frame++;
            if (frame > totalFrames) {
                clearInterval(interval);
                setDisplay(text);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [isInView, text, hasAnimated]);

    return (
        <Tag ref={ref} className={className}>
            {display}
        </Tag>
    );
}
