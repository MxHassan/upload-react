import { Box, Drawer, Toolbar, useMediaQuery, useTheme } from "@mui/material";

import PlateImgsCard from "./PlateImgsCard";

const drawerWidth = "30%";

const PlateImgs = () => {
  const theme = useTheme();
  const matchMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {matchMd ? (
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box>
            <PlateImgsCard />
          </Box>
        </Drawer>
      ) : (
        <>
          <PlateImgsCard />
        </>
      )}
    </>
  );
};

export default PlateImgs;
