module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/@core/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/@core/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ADD8E6', 
          DEFAULT: '#618264', 
          dark: '#0056b3', 
        },
        secondary: {
          light: '#FFD700', 
          DEFAULT: '#618264', 
          dark: '#FF8C00', 
        },
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}
