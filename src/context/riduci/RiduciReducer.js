const RiduciReducer = (state, action) => {
    switch (action.type) {
      case "RIDUCI":
        return {
            riduci: true,
            error: false,
        }
      default:
        return state;
    }
  };
  
  export default RiduciReducer;