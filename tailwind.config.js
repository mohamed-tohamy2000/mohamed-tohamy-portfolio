import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 197, 94, 0.18)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        devdark: {
          primary: "#22c55e",
          secondary: "#6366f1",
          accent: "#22c55e",
          neutral: "#111827",
          "base-100": "#050816",
          "base-200": "#0b1120",
          "base-300": "#111827",
          info: "#0ea5e9",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
      "light",
    ],
  },
};
