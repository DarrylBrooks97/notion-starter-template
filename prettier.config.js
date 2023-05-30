// prettier.config.js
module.exports = {
  bracketSpacing: true,
  semi: true,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  importOrder: [
    "^(next/(.*)$)|^(next$)",
    "^(react/(.*)$)|^(react$)",
    "^@/components/(.*)$|^components/(.*)$",
    "^@/lib/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: [require("prettier-plugin-tailwindcss")],
};
