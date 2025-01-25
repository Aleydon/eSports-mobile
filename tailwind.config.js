/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      background_900: '#121214',
      background_800: '#18181B',
      white: '#FFFFFF',
      caption_500: '#71717A',
      caption_400: '#A1A1AA',
      caption_300: '#D4D4D8',
      shape: '#2A2634',
      primary: '#8B5CF6',
      sucess: '#34D399',
      alert: '#F87171',
      footer: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)'],
      overlay: 'rgba(0,0,0,0.6)'
    },
    fontFamily: {
      regular: 'Inter_400Regular',
      semiBold: 'Inter_600SemiBold',
      bold: 'Inter_700Bold',
      black: 'Inter_900Black'
    },
    extend: {}
  },
  plugins: []
};
