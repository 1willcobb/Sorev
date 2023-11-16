import * as React from "react";
import { Link } from "react-router-dom";
import Sorev_Carrd from "../images/Sorev_Carrd.svg";
import { CssBaseline } from "@mui/material";

const pages = [
  { name: "Products", link: "/products" },
  { name: "FAQ", link: "/faq" },
  { name: "Why", link: "/why" },
  { name: "Video", link: "/video" },
  { name: "Portal", link: "/portal" },
  { name: "Login", link: "/login" },
];
const settings = [
  { name: "Profile", link: "/profile" },
  { name: "Dashboard", link: "/dashboard" },
  { name: "Logout", link: "/logout" },
];

function ResponsiveAppBar() {
  return (
    <div className="container flex justify-self-center">
      <CssBaseline />
      <img src={Sorev_Carrd} height={"200px"} className="" />
    </div>
  );
}
export default ResponsiveAppBar;
