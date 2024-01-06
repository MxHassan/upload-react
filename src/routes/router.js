import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Result from "../views/result/Result";
import UploadPage from "../views/upload-page/UploadPage";
import Protected from "./Protected";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <UploadPage />,
      },
      {
        element: <Protected />,
        children: [
          {
            path: "/result",
            element: <Result />,
          },
        ],
      },
    ],
  },
]);

export default router;
