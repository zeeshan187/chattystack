import React from "react";
import { Box } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        position: "relative",
      }}
    >
      <img src="/images/logo.svg" alt="Logo" className="navbar_logo" />
    </Box>
  );
};

export default Navbar;
