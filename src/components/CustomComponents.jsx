import { Avatar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
export const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const CarImg = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "contain",
  maxHeight: "60vh",
}));
export const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  fontSize: 28,
}));
export const Logo = styled(Avatar)(({ theme }) => ({
  width: "auto",
  height: "50px",
}));
