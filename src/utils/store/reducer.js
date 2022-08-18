const rootReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PROJECTS":
      return { ...state, projects: action.payload, loading:false };
    case "SET_LOAD_FALSE":
      return {...state, loading:false}
    case "LOAD": 
      return {...state, loading:true}
    case "SENT_MESSAGE":
      return {
        ...state,
        dialog: {
          display: true,
          message:
            "Thank You. Your message was sent. I will get back to you shortly.",
        },
      };
    case "FETCH_ERROR":
      return {...state,
      dialog:{
        display:true,
        message: 'Loading error. Please try refreshing'
      }}
    case "CLOSE_DIALOG":
      return { ...state, dialog: { display: false, message: "" } };

    default:
      return state;
  }
};

export default rootReducer;
