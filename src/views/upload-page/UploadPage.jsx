import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Cancel } from "@mui/icons-material";
import { useContext } from "react";
import { IconButton, styled } from "@mui/material";
import { CarImg, FlexBox } from "../../components/CustomComponents";
import UploadPageContent from "../../components/uploadpage-content/UploadPageContent";
import { FileContext } from "../../context/FileContext";
const UploadFlexBox = styled(FlexBox)(({ theme }) => ({
  flexDirection: "column",
  padding: "0 8px",
  marginTop: "40px",
  position: "relative",
}));

const UploadCancelButton = styled(IconButton)(({ theme }) => ({
  left: 10,
  top: -30,
  opacity: 0.7,
  position: "absolute",
}));
const ImgPreviewBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: "600px",
  },
}));

const UploadPage = () => {
  const { data, dispatch: fileDispatch } = useContext(FileContext);

  return (
    <>
      {data ? (
        <Grid container component="main">
          <CssBaseline />
          <Grid item xs={12} md={7} component={Box}>
            <UploadFlexBox>
              <UploadCancelButton
                disableRipple
                onClick={() => fileDispatch({ type: "FILESAVE_REMOVE" })}
              >
                <Cancel />
              </UploadCancelButton>
              <ImgPreviewBox>
                <CarImg src={URL.createObjectURL(data)} alt="Car" />
              </ImgPreviewBox>
            </UploadFlexBox>
          </Grid>
          <Grid item xs={12} md={5}>
            <UploadPageContent />
          </Grid>
        </Grid>
      ) : (
        <UploadPageContent />
      )}
    </>
  );
};

export default UploadPage;
