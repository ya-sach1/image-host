const colors = require("tailwindcss/colors");

module.exports = {
    theme: {
        colors: {
            midnight: "#17172F",
            twilight: "#1F1F3F",
            noon: "#E7E7FF",
            ...colors
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            serif: ["Palatino Linotype", "serif"]
        }
    },
    darkMode: "media"
};