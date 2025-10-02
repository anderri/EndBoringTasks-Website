import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#4A67F8",
          magenta: "#DB37B8",
          navy: "#090816"
        }
      },
      fontFamily: {
        // ITC Avant Garde Gothic Std is proprietary; use closest fallbacks.
        // Replace with your licensed webfont via @font-face in globals.css.
        avant: ['"ITC Avant Garde Gothic Std"', 'Avant Garde', '"URW Gothic L"', 'Poppins', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
