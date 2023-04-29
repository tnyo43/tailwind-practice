const colors = {
  red: {
    10: "#ffebeb",
    20: "#ffd6d6",
    30: "#ffc2c2",
    40: "#ffadad",
    50: "#f99",
    60: "#ff8585",
    70: "#ff7070",
    80: "#ff5c5c",
    90: "#ff3939",
    100: "#f33",
  },
  green: {
    10: "#ebffeb",
    20: "#d6ffd6",
    30: "#c2ffc2",
    40: "#adffad",
    50: "#9f9",
    60: "#85ff85",
    70: "#70ff70",
    80: "#5cff5c",
    90: "#39ff39",
    100: "#3f3",
  },
  blue: {
    10: "#ebebff",
    20: "#d6d6ff",
    30: "#c2c2ff",
    40: "#adadff",
    50: "#99f",
    60: "#8585ff",
    70: "#7070ff",
    80: "#5c5cff",
    90: "#3939ff",
    100: "#33f",
  },
  gray: {
    10: "#ebebeb",
    20: "#d6d6d6",
    30: "#c2c2c2",
    40: "#adadad",
    50: "#999",
    60: "#858585",
    70: "#707070",
    80: "#5c5c5c",
    90: "#393939",
  },
  white: "#fff",
  black: "#333",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      alert: {
        DEFAULT: colors.red[100],
        background: colors.red[10],
      },
      accent: {
        DEFAULT: colors.blue[100],
        background: colors.blue[10],
      },
      mono: {
        DEFAULT: colors.black,
        background: colors.gray[10],
      },
    },
    spacing: {
      0: "0",
      4: "0.25rem",
      8: "0.5rem",
      16: "1rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
    },
    borderRadius: {
      DEFAULT: "0.5rem",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
};
