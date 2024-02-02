import {
  AppBar,
  Backdrop,
  Box,
  CircularProgress,
  IconButton,
  Toolbar,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UploadContext } from "../context/UploadContext";
import { Logo, NavLink } from "../components/CustomComponents";

const MainLayout = () => {
  const theme = useTheme();
  const { isFetching } = useContext(UploadContext);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <NavLink to="/">
              <IconButton sx={{ py: "0px" }} disableRipple>
                <Logo variant="square" src="logo-nobg.png" />
              </IconButton>
              Royal Defense LPR
            </NavLink>
          </Toolbar>
        </AppBar>
        {isFetching && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isFetching}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </Box>
      <Outlet />
    </>
  );
};

export default MainLayout;
