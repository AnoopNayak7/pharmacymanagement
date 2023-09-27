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
          light: '#FFF6E0', 
          DEFAULT: '#272829', 
          dark: '#272829', 
        },
        secondary: {
          light: '#272829', 
          DEFAULT: '#272829', 
          dark: '#272829', 
        },
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}
