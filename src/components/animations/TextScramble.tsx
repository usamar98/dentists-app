"use client";

interface TextScrambleProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextScramble({
    text,
    className = "",
    as: Tag = "h2",
}: TextScrambleProps) {
    return <Tag className={className}>{text}</Tag>;
}
