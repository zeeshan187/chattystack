import React from "react";
import { Button, Grid, TextField, Typography, Box } from "@mui/material";

const FinalScreen: React.FC = () => {
  return (
    <Box className="payment_screen" sx={{ textAlign: "center", padding: 2 }}>
      <img
        src="/images/payment/actor.svg"
        alt="Actor"
        className="payment_img"
        style={{ margin: "0 auto", maxWidth: "100%", height: "auto" }}
      />
      <Box className="final_main_div" sx={{ maxWidth: 500, margin: "0 auto", textAlign: "left" }}>
        <Typography className="final_screen_para" variant="body1" sx={{ marginBottom: 2 }}>
          Excellent! You’re almost done...
        </Typography>
        <Typography
          className="final_screen_heading"
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: 2 }}
        >
          Confirm Your Phone Number
        </Typography>
        <Typography
          className="final_screen_para2"
          variant="body2"
          sx={{ marginBottom: 3, lineHeight: 1.5 }}
        >
          In order to adhere to federal regulations, you must give us permission to have your demo
          agent call your phone. Please add your number to the form below and confirm that you agree
          through SMS.
        </Typography>
        <Grid item sx={{ width: "100%", marginBottom: 3 }}>
          <Typography
            sx={{ fontWeight: "500", fontSize: "13px", marginBottom: 1 }}
          >
            <span>Your Phone Number</span> (for testing)
          </Typography>
          <TextField
            fullWidth
            name="phone"
            placeholder="Phone Number"
            autoComplete="off"
            sx={{
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
              },
            }}
          />
        </Grid>
        <Typography
          className="terms_para"
          variant="body2"
          sx={{ marginBottom: 3, lineHeight: 1.5 }}
        >
          By clicking the button below, you agree to our{" "}
          <Typography
            component="span"
            sx={{ color: "primary.main", textDecoration: "underline", cursor: "pointer" }}
          >
            Terms of Use
          </Typography>{" "}
          and to allow your demo AI Agent to call you. Your number is kept confidential in accordance
          with our{" "}
          <Typography
            component="span"
            sx={{ color: "primary.main", textDecoration: "underline", cursor: "pointer" }}
          >
            Privacy Policy.
          </Typography>
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: "15px",
            textTransform: "none",
            width: "100%",
            padding: "10px 0",
          }}
          className="step_one_btn"
        >
          Call Me Now
        </Button>
      </Box>
    </Box>
  );
};

export default FinalScreen;
