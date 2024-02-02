import { useContext } from "react";
import { UploadContext } from "../context/UploadContext";
import { Navigate, Outlet } from "react-router-dom";
const Protected = () => {
  const { data } = useContext(UploadContext);
  return data?.fullImg ? <Outlet /> : <Navigate to="/" />;
};

export default Protected;
