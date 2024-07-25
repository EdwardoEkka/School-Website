const initialState = {
    selectedLink:1
  };
  
  const navReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SWITCH_NAVLINKS':
        return {
          ...state,
          selectedLink:action.payload
        };
      default:
        return state;
    }
  };
  
  export default navReducer;
  