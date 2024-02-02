import { createContext, useReducer } from "react";
import FileReducer from "./FileReducer";
const INITIAL_STATE = {
  data: null,
  isFetching: false,
  error: false,
};
export const FileContext = createContext(INITIAL_STATE);
export const FileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FileReducer, INITIAL_STATE);
  return (
    <FileContext.Provider
      value={{
        data: state.data,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
