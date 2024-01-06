import { useContext } from "react";
import { UploadContext } from "../context/UploadContext";
import { Navigate, Outlet } from "react-router-dom";
const Protected = () => {
  const { data } = useContext(UploadContext);
  return data?.plate_number ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
