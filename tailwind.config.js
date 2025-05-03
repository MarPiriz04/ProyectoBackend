/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.{handlebars,js}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        pharmacy: {
          "primary": "#3b82f6", // A shade of blue
          "secondary": "#ffffff", // White
          "accent": "#60a5fa", // A lighter blue for accent
          "neutral": "#f3f4f6", // Light gray for neutral elements
          "base-100": "#ffffff", // White for base background
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "light", // Keep light theme as an option
      "dark", // Keep dark theme as an option
    ],
    darkTheme: "dark", // Ensure dark theme is still an option
  },
}