import { createContext, useReducer } from "react";
import UploadReducer from "./UploadReducer";
const INITIAL_STATE = {
  data: {
    confidence: 0,
    images: [],
    plate_number: "",
    message: "",
    fullImg: "",
    plateImg: "",
  },
  isFetching: false,
  error: false,
};
export const UploadContext = createContext(INITIAL_STATE);
export const UploadContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UploadReducer, INITIAL_STATE);

  return (
    <UploadContext.Provider
      value={{
        data: state.data,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
