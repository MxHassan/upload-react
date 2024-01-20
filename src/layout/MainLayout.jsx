import {
  AppBar,
  Box,
  IconButton,
  LinearProgress,
  Toolbar,
} from "@mui/material";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UploadContext } from "../context/UploadContext";
import { Logo, NavLink } from "../components/CustomComponents";

const MainLayout = () => {
  const { isFetching } = useContext(UploadContext);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
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
          <Box sx={{ width: "100%" }}>
            <LinearProgress sx={{ height: "8px" }} />
          </Box>
        )}
      </Box>
      <Outlet />
    </>
  );
};

export default MainLayout;
