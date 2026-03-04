import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#ffffff",
                foreground: "#0A0A0A",
            },
            fontFamily: {
                jakarta: ["var(--font-jakarta)", "sans-serif"],
                inter: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
