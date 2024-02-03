import {
  AppBar,
  Backdrop,
  Box,
  CircularProgress,
  IconButton,
  Toolbar,
  useTheme,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { UploadContext } from "../context/UploadContext";
import { Logo, NavLink } from "../components/CustomComponents";

const MainLayout = () => {
  const theme = useTheme();
  const { isFetching } = useContext(UploadContext);
  const { pathname } = useLocation();
  const [matchResult, setMatchresult] = useState(null);
  useEffect(() => {
    if (pathname === "/result") setMatchresult(true);
    else setMatchresult(false);
  }, [pathname]);
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
            {matchResult && (
              <>
                <Box sx={{ flexGrow: 1 }} />
                <NavLink to="/">Go Home</NavLink>
              </>
            )}
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
