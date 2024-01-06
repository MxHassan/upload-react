import { Box, CssBaseline, Divider, Grid, styled } from "@mui/material";
import { UploadContext } from "../../context/UploadContext";
import { useContext } from "react";
import { BASE_URL } from "../../constants";
import { CarImg, FlexBox } from "../../components/CustomComponents";
import { blue, grey } from "@mui/material/colors";

const RightGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
}));
const PlateBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "column",
  backgroundColor: grey[300],
  padding: "8px",
  margin: "10px 0",
  borderRadius: "5px",
}));
const PlateInfoHeader = styled("span")(({ theme }) => ({
  fontSize: "21px",
  fontWeight: "bold",
}));
const PlateInfoDetail = styled("span")(({ theme }) => ({
  fontSize: "19px",
  fontWeight: "bold",
  color: blue[800],
}));

const PlateImg = styled("img")(({ theme }) => ({
  minWidth: "200px",
  objectFit: "contain",
}));
const CustomDivider = styled(Divider)(({ theme }) => ({
  borderRightWidth: 4,
  borderRadius: 12,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Result = () => {
  const { data } = useContext(UploadContext);
  return (
    <Grid sx={{ mt: 6 }} container component="main">
      <CssBaseline />
      <Grid item xs={12} md={7} component={Box}>
        {data?.fullImg && (
          <CarImg src={`${BASE_URL}/detections/${data.fullImg}`} alt="Car" />
        )}
      </Grid>
      <RightGrid item xs={12} md={5}>
        <CustomDivider orientation="vertical" />
        <FlexBox sx={{ flexDirection: "column", my: "20px" }}>
          {data?.plateImg && (
            <PlateImg
              src={`${BASE_URL}/detections/${data.plateImg}`}
              alt="License Plate"
            />
          )}
          <PlateBox>
            <Box>
              <PlateInfoHeader>Plate Number: </PlateInfoHeader>
              <PlateInfoDetail>{data.plate_number}</PlateInfoDetail>
            </Box>
            <Box>
              <PlateInfoHeader>Confidence: </PlateInfoHeader>
              <PlateInfoDetail>
                {data.confidence.toPrecision(3)}
              </PlateInfoDetail>
            </Box>
          </PlateBox>
        </FlexBox>
      </RightGrid>
    </Grid>
  );
};

export default Result;
