import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Send, CloudUpload, Cancel } from "@mui/icons-material";
import { useContext, useState } from "react";
import { IconButton, styled } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UploadContext } from "../../context/UploadContext";
import { CarImg, FlexBox } from "../../components/CustomComponents";
import { grey } from "@mui/material/colors";
const UploadFlexBox = styled(FlexBox)(({ theme }) => ({
  flexDirection: "column",
  padding: "0 8px",
  marginTop: "40px",
  position: "relative",
}));
const UploadFlexBoxTitle = styled(FlexBox)(({ theme }) => ({
  marginBottom: "4px",
  backgroundColor: grey[400],
  borderRadius: "8px",
  padding: 3,
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
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { dispatch } = useContext(UploadContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      const data = new FormData(event.currentTarget);
      data.append("image", file);
      dispatch({ type: "UPLOAD_START" });
      try {
        const res = await axios.post(`${BASE_URL}/api/v1/lpr`, data);
        console.log(res);
        if (res.data.success) {
          if (res?.data?.data?.images[0]?.includes("_full")) {
            res.data.data.fullImg = res.data.data.images[0];
            res.data.data.plateImg = res.data.data.images[1];
          } else {
            res.data.data.fullImg = res.data.data.images[1];
            res.data.data.plateImg = res.data.data.images[0];
          }
          console.log(res.data.data);
          dispatch({ type: "UPLOAD_SUCCESS", payload: res.data.data });
          navigate("/result");
        }
      } catch (err) {
        if (err?.response?.data?.status) {
          dispatch({ type: "UPLOAD_FAILURE" });
          toast.error(err.response.data.message);
        } else {
          dispatch({ type: "UPLOAD_FAILURE" });
          toast.error(err);
        }
      }
    }
  };
  const UploadPageContent = () => {
    return (
      <Container sx={{ display: "flex" }} component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h4" component={UploadFlexBoxTitle}>
                      Try It Out
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component={FlexBox}>
                      Upload an image (up to 5MB) and we'll decode the plate
                      number.
                    </Typography>
                  </Grid>
                  <Grid component={FlexBox} item xs={12}>
                    <Button
                      component="label"
                      variant="contained"
                      startIcon={<CloudUpload />}
                    >
                      Upload file
                      <input
                        hidden
                        type="file"
                        name="carImg"
                        id="file"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files[0].size < 5 * 1024 * 1024) {
                            setFile(e.target.files[0]);
                          } else {
                            toast.error("Image cannot be larger that 5MB");
                          }
                        }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  value={name}
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={email}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={phone}
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <Send sx={{ mr: 1 }} />
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    );
  };

  return (
    <>
      {file ? (
        <Grid container component="main">
          <CssBaseline />
          <Grid item sm={12} md={7} component={Box}>
            <UploadFlexBox>
              <UploadCancelButton disableRipple onClick={() => setFile(null)}>
                <Cancel />
              </UploadCancelButton>
              <ImgPreviewBox>
                <CarImg src={URL.createObjectURL(file)} alt="Car" />
              </ImgPreviewBox>
            </UploadFlexBox>
          </Grid>
          <Grid item sm={12} md={5}>
            <UploadPageContent />
          </Grid>
        </Grid>
      ) : (
        <UploadPageContent />
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default UploadPage;
