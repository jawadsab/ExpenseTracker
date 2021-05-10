

const initialState = {
  theme: "dark",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "light":
     
      return {
        ...state,
        theme: "dark",
      };
    case "dark":
     

      return {
        ...state,
        theme: "light",
      };
    default:
      
      return state;
  }
};

export default themeReducer
