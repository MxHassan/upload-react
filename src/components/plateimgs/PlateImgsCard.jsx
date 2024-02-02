import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext } from "react";
import { BASE_URL } from "../../constants";
import { UploadContext } from "../../context/UploadContext";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
import { FlexBox } from "../CustomComponents";
const PlateBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: grey[300],
  padding: "8px",
  margin: "10px 0",
  borderRadius: "5px",
}));

const PlateImgsCard = () => {
  const { data } = useContext(UploadContext);
  const { plateImgs } = data;
  return (
    <>
      {plateImgs.map((plateImg, index) => (
        <Card
          key={index}
          sx={{ maxWidth: "400px", marginX: "auto", marginY: 2 }}
        >
          <FlexBox sx={{ flexDirection: "column" }}>
            <CardMedia
              component="img"
              sx={{ maxWidth: "300px", height: "auto", objectFit: "contain" }}
              image={`${BASE_URL}/detections/${plateImg.plate_image}`}
              alt="plate image"
            />
            <CardContent>
              <PlateBox>
                <Box>
                  <Typography gutterBottom variant="h5" component="span">
                    Plate Number:{" "}
                  </Typography>
                  <Typography variant="h6" component="span" color="primary">
                    {plateImg.plate_number}
                  </Typography>
                </Box>
                <Box>
                  <Typography gutterBottom variant="h5" component="span">
                    Confidence:{" "}
                  </Typography>
                  <Typography variant="h6" component="span" color="primary">
                    {plateImg.confidence.toPrecision(3)}
                  </Typography>
                </Box>
              </PlateBox>
            </CardContent>
          </FlexBox>
        </Card>
      ))}
    </>
  );
};

export default PlateImgsCard;
