const FileReducer = (state, action) => {
  switch (action.type) {
    case "FILESAVE_START":
      return {
        data: null,
        isFetching: true,
        error: false,
      };
    case "FILESAVE_SUCCESS":
      return {
        data: action.payload,
        isFetching: false,
        error: false,
      };
    case "FILESAVE_FAILURE":
      return {
        data: null,
        isFetching: false,
        error: true,
      };
    case "FILESAVE_REMOVE":
      return {
        data: null,
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

export default FileReducer;
