const UploadReducer = (state, action) => {
  switch (action.type) {
    case "UPLOAD_START":
      return {
        data: null,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_SUCCESS":
      return {
        data: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPLOAD_FAILURE":
      return {
        data: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default UploadReducer;
