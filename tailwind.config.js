/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "auto 1fr",
        viewLayout: "300px 1fr",
      },
      backgroundImage: {
        "select-arrow":
          "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e)",
      },
      backgroundPosition: {
        "arrow-position": "right 0.5rem center",
      },
    },
  },
  plugins: [],
};
