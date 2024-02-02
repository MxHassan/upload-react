import { Box, styled } from "@mui/material";
import { UploadContext } from "../../context/UploadContext";
import { useContext } from "react";
import { BASE_URL } from "../../constants";
import { CarImg, FlexBox } from "../../components/CustomComponents";
import { Outlet } from "react-router-dom";

const FullImgBox = styled(Box)(({ theme }) => ({
  marginTop: 80,
  width: "70%",
  [theme.breakpoints.down("md")]: {
    margin: "80px auto 0px",
  },
}));

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
