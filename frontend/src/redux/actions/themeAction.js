

export const switchTheme = (theme) => {
  return function (dispatch) {
    console.log("YEAAHHH ",theme)
    theme === "light"
      ? dispatch({ type: "dark" })
      : dispatch({ type: "light" });
  };
};
