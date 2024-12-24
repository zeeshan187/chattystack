import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Grid,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";
import InfoIcon from "@mui/icons-material/Info";

// Define props for the PaymentForm component
interface PaymentFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ setStep }) => {
  const [country, setCountry] = useState<string>("");
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  // Form state for validation
  const [cardNumber, setCardNumber] = useState<string>("");
  const [securityCode, setSecurityCode] = useState<string>("");

  const [errors, setErrors] = useState<{
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
  }>({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
  });

  // Handle changes for the date picker
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  // Handle country selection
  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    let valid = true;
    const newErrors = { cardNumber: "", expirationDate: "", securityCode: "" };

    // Card Number validation
    if (!cardNumber) {
      newErrors.cardNumber = "Card number is required.";
      valid = false;
    }

    // Security Code validation
    if (!securityCode) {
      newErrors.securityCode = "Security code is required.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setStep(4);
    }
  };

  return (
    <div className="payment_screen">
      <img
        src="/images/payment/actor.svg"
        alt="Actor"
        className="payment_img"
      />
      <div className="payment_main_div">
        <h2 className="payment_heading">Payment Information</h2>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Typography>
        <div className="payment_images" style={{ marginBottom: "16px" }}>
          <img src="/images/payment/one.svg" alt="One" />
          <img src="/images/payment/two.svg" alt="Two" />
          <img src="/images/payment/three.svg" alt="Three" />
          <img src="/images/payment/four.svg" alt="Four" />
          <img src="/images/payment/five.svg" alt="Five" />
          <img src="/images/payment/six.svg" alt="Six" />
          <img src="/images/payment/seven.svg" alt="Seven" />
        </div>

        {/* Card Number */}
        <Grid item sx={{ width: "100%" }}>
          <Typography sx={{ fontWeight: "400", fontSize: "13px" }}>
            Card Number
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
          />
        </Grid>

        {/* Expiration Date & CVV */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "400", fontSize: "13px", marginBottom: 1 }}
              >
                Expiration
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  views={["year", "month"]}
                  label="Expiration Date"
                  value={value}
                  onChange={handleChange}
                  format="MM/YY"
                  sx={{ width: "100%" }}
                  slotProps={{
                    textField: {
                      variant: "outlined",
                      fullWidth: true,
                      error: !!errors.expirationDate,
                      helperText: errors.expirationDate,
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "400", fontSize: "13px", marginBottom: 1 }}
              >
                Security Code
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <InfoIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!errors.securityCode}
                helperText={errors.securityCode}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Card Holder Names */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "400", fontSize: "13px", marginBottom: 1 }}
              >
                Card Holder’s First Name
              </Typography>
              <TextField fullWidth variant="outlined" />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "400", fontSize: "13px", marginBottom: 1 }}
              >
                Card Holder’s Second Name
              </Typography>
              <TextField fullWidth variant="outlined" />
            </Grid>
          </Grid>
        </Grid>

        {/* Company Name & Address */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "400", fontSize: "13px", marginBottom: 1 }}
              >
                Company Name
              </Typography>
              <TextField fullWidth variant="outlined" />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "400", fontSize: "13px", marginBottom: 1 }}
              >
                Address
              </Typography>
              <TextField fullWidth variant="outlined" />
            </Grid>
          </Grid>
        </Grid>

        {/* City & Postal Code */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "400", fontSize: "13px", marginBottom: 1 }}
              >
                City
              </Typography>
              <TextField fullWidth variant="outlined" />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "400", fontSize: "13px", marginBottom: 1 }}
              >
                Postal Code
              </Typography>
              <TextField fullWidth variant="outlined" />
            </Grid>
          </Grid>
        </Grid>

        {/* Country Select */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "400", fontSize: "13px", marginBottom: 1 }}
              >
                Country
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="country-select-label">Country</InputLabel>
                <Select
                  labelId="country-select-label"
                  id="country-select"
                  value={country}
                  onChange={handleCountryChange}
                  label="Country"
                >
                  <MenuItem value="" disabled>
                    Select Country
                  </MenuItem>
                  <MenuItem value="USA">United States</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="UK">United Kingdom</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        {/* Paragraph & Button */}
        {/* <Typography variant="body2">
        Please ensure all details are correct before proceeding.
      </Typography> */}
        <Typography className="step_four_para">
          Your privacy is important to us. We’ll only use your information as
          described in our <br />
          <span> Terms of Service</span> and <span>Privacy Policy</span>
        </Typography>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ fontSize: "15px" }}
          className="step_one_btn"
        >
          Submit Purchase
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
