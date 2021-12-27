import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "Docs",
        ["Readme", "Changelog"],
        "Atoms",
        ["Button"],
        "Patterns",
        ["Layout", ["Layout", "Navigation", "Main", "Footer"]],
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
