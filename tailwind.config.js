const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export default {
  content: ["./src/index.html", "./src/**/*.{ts,vue}", "./src/styles/*.css"],
  theme: {
    screens: Object.fromEntries(
      Object.entries(breakpoints).map(([name, width]) => [name, `${width}px`])
    ),
  },
  breakpoints,
};
