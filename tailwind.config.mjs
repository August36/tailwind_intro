/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    /*hvis du indsætter color-regler her, overtager de alle andre regler color-regler, så dem du angiver her er de eneste du kan bruge */
    extend:
      {} /* tilføjer du color-regler her, tilføjes reglerne til de eksisterende tailwind colors */,
  },
  plugins: [],
};
