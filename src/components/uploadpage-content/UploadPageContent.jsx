import { CloudUpload, Send } from "@mui/icons-material";
import { toast } from "react-toastify";
import { FileContext } from "../../context/FileContext";
import { UploadContext } from "../../context/UploadContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";

const {
  Container,
  CssBaseline,
  Box,
  Grid,
  styled,
  Button,
  TextField,
  Typography,
} = require("@mui/material");
const { useState, useContext } = require("react");
const { FlexBox } = require("../CustomComponents");
const { grey } = require("@mui/material/colors");

const UploadFlexBoxTitle = styled(FlexBox)(({ theme }) => ({
  marginBottom: "4px",
  backgroundColor: grey[400],
  borderRadius: "8px",
  padding: 3,
}));
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadPageContent = () => {
  const { data: file, dispatch: fileDispatch } = useContext(FileContext);
  const { dispatch } = useContext(UploadContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("image", file);
      dispatch({ type: "UPLOAD_START" });
      try {
        const res = await axios.post(`${BASE_URL}/api/v1/lpr`, formData);
        if (res.data.success) {
          let data = {
            fullImg: res.data.full_image,
            plateImgs: res.data.data,
          };
          dispatch({ type: "UPLOAD_SUCCESS", payload: data });
          fileDispatch({ type: "FILESAVE_REMOVE" });
          navigate("/result");
        } else if (res.data.status === 400) {
          toast.error("No plate found");
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
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                    sx={{ marginLeft: 2 }}
                  >
                    Upload file
                    <VisuallyHiddenInput
                      name="image"
                      id="image"
                      accept="image/*"
                      type="file"
                      onChange={(e) => {
                        fileDispatch({ type: "FILESAVE_START" });
                        if (e.target.files[0].size < 5 * 1024 * 1024) {
                          fileDispatch({
                            type: "FILESAVE_SUCCESS",
                            payload: e.target.files[0],
                          });
                        } else {
                          fileDispatch({ type: "FILESAVE_FAILURE" });
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
export default UploadPageContent;
