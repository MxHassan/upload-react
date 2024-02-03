import { Drawer, Toolbar, useMediaQuery, useTheme } from "@mui/material";

import PlateImgsCard from "./PlateImgsCard";
import { FlexBox } from "../CustomComponents";

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
          <FlexBox
            sx={{ flexGrow: 1, textAlign: "center", flexDirection: "column" }}
          >
            <PlateImgsCard />
          </FlexBox>
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
