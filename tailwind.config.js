/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#DC2626',
        'secondary-red': '#EF4444',
        'light-gray': '#F9FAFB',
        'medium-gray': '#F3F4F6',
        'dark-gray': '#6B7280',
        'sidebar-bg': '#E5E7EB',
        'card-bg': '#FFFFFF',
        'text-primary': '#111827',
        'text-secondary': '#374151',
        'border-color': '#E5E7EB',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
