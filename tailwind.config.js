/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        skill: {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation : {
        skill : 'skill 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both'
      }
    },
  },
  plugins: [],
};
