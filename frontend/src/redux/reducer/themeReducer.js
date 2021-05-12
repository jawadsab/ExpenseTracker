const initialState = {
  theme: localStorage.getItem('theme') || 'light',
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'light':
      localStorage.setItem('theme', 'dark');
      return {
        ...state,
        theme: 'dark',
      };
    case 'dark':
      localStorage.setItem('theme', 'light');

      return {
        ...state,
        theme: 'light',
      };
    default:
      return state;
  }
};

export default themeReducer;
