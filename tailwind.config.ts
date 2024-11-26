import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      sans: ["--font-work-sans"],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(orange|blue|yellow|pink|cyan|emerald|gray)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
};
export default config;
