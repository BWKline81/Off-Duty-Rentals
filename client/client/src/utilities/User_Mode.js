function isDarkMode() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const darkModeEnabled = event.matches;
    console.log("Dark mode changed:", darkModeEnabled);
    // You can call a function here or update state if using React
  });

console.log("Initial dark mode state:", isDarkMode());
