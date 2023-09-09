/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ungu: "#732C80",
        dary: "#FF9C99",
        tertiary: "#FDE356 ",
        kuning: "#FDE356",
        merah: "#FF0000",
        ning: "#F9E555",
        pri:"#E763FF",
        mary:"#450052",
        bu:"#D9D9D9",
        gr:"#454545"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

