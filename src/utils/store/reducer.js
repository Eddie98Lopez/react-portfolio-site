const rootReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PROJECTS":
      return { ...state, projects: action.payload };
    case "SENT_MESSAGE":
      return {
        ...state,
        dialog: {
          display: true,
          message:
            "Thank You. Your message was sent. I will get back to you shortly.",
        },
      };
    case "CLOSE_DIALOG":
      return { ...state, dialog: { display: false, message: "" } };

    default:
      return state;
  }
};

export default rootReducer;
