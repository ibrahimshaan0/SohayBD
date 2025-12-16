/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sbd-primary': 'var(--sbd-primary-color)',
        'sbd-secondary': 'var(--sbd-secondary-color)',
        'sbd-accent': 'var(--sbd-accent-color)',
        'sbd-text': 'var(--sbd-text-color)',
        'sbd-white': 'var(--sbd-common-white)',
        'sbd-overlay': 'var(--sbd-common-overlay)',
      },
      fontSize: {
        'sbd-h1': 'var(--sbd-fz-h1)',
        'sbd-h2': 'var(--sbd-fz-h2)',
        'sbd-h3': 'var(--sbd-fz-h3)',
        'sbd-body': 'var(--sbd-fz-body)',
      },
      lineHeight: {
        'sbd-h1': 'var(--sbd-lh-h1)',
        'sbd-h2': 'var(--sbd-lh-h2)',
        'sbd-h3': 'var(--sbd-lh-h3)',
        'sbd-body': 'var(--sbd-lh-body)',
      },
    },
  },
  plugins: [],
}
