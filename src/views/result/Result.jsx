import { UploadContext } from "../../context/UploadContext";
import { useContext } from "react";
import { BASE_URL } from "../../constants";
import { CarImg, FlexBox, FullImgBox } from "../../components/CustomComponents";
import { Outlet } from "react-router-dom";

const Result = () => {
  const { data } = useContext(UploadContext);
  return (
    <>
      <FullImgBox>
        {data?.fullImg && (
          <FlexBox>
            <CarImg src={`${BASE_URL}/detections/${data?.fullImg}`} alt="Car" />
          </FlexBox>
        )}
      </FullImgBox>
      <FlexBox sx={{ flexDirection: "column", my: "20px" }}>
        <Outlet />
      </FlexBox>
    </>
  );
};

export default Result;
