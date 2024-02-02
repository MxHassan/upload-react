import { createContext, useReducer } from "react";
import UploadReducer from "./UploadReducer";
const INITIAL_STATE = {
  data: {
    fullImg: "ALPR_098a20240202011951_plate_89.33_7245FAK_full.jpg",
    plateImgs: [
      {
        plate_number: "ق أ ف ٥ ٤ ٢ ٧",
        confidence: 89.11428571428571,
        plate_image: "ALPR_098a20240202011951_plate_89.33_7245FAK.jpg",
      },
      {
        plate_number: "أ ط ع ٤ ٧ ٩ ٨",
        confidence: 87.6142857142857,
        plate_image: "ALPR_098a20240202011951_plate_89.33_7245FAK.jpg",
      },
      {
        plate_number: "ق أ ف ٥ ٤ ٢ ٧",
        confidence: 89.11428571428571,
        plate_image: "ALPR_098a20240202011951_plate_89.33_7245FAK.jpg",
      },
      {
        plate_number: "أ ط ع ٤ ٧ ٩ ٨",
        confidence: 87.6142857142857,
        plate_image: "ALPR_098a20240202011951_plate_89.33_7245FAK.jpg",
      },
      {
        plate_number: "ق أ ف ٥ ٤ ٢ ٧",
        confidence: 89.11428571428571,
        plate_image: "ALPR_098a20240202011951_plate_89.33_7245FAK.jpg",
      },
      {
        plate_number: "أ ط ع ٤ ٧ ٩ ٨",
        confidence: 87.6142857142857,
        plate_image: "ALPR_098a20240202011951_plate_89.33_7245FAK.jpg",
      },
      {
        plate_number: "ق أ ف ٥ ٤ ٢ ٧",
        confidence: 89.11428571428571,
        plate_image: "ALPR_098a20240202011951_plate_89.33_7245FAK.jpg",
      },
      {
        plate_number: "أ ط ع ٤ ٧ ٩ ٨",
        confidence: 87.6142857142857,
        plate_image: "ALPR_098a20240202011951_plate_89.33_7245FAK.jpg",
      },
      {
        plate_number: "ق أ ف ٥ ٤ ٢ ٧",
        confidence: 89.11428571428571,
        plate_image: "ALPR_098a20240202011951_plate_89.33_7245FAK.jpg",
      },
      {
        plate_number: "أ ط ع ٤ ٧ ٩ ٨",
        confidence: 87.6142857142857,
        plate_image: "ALPR_098a20240202011951_plate_89.33_7245FAK.jpg",
      },
    ],
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
