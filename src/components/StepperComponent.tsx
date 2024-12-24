import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { StepIconProps } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

// Image paths
const activeImage = "/images/activeImage.svg";
const completedImage = "/images/completedImage.svg";
const remainingImage = "/images/remainingImage.svg";

// Custom Step Icon Component
interface CustomStepIconProps extends StepIconProps {}

const CustomStepIcon: React.FC<CustomStepIconProps> = ({
  active = false,
  completed = false,
  icon,
}) => {
  let image = remainingImage;

  if (completed) {
    image = completedImage;
  } else if (active) {
    image = activeImage;
  }

  return (
    <Box
      component="img"
      src={image}
      alt={`Step ${icon}`}
      sx={{ width: 22, height: 22 }}
    />
  );
};

// Types for form values and errors
interface FormValues {
  name: string;
  email: string;
  password: string;
  website: string;
  agentName: string;
  companyWebsite: string;
  agentEmail: string;
}

interface FormErrors {
  name: string;
  email: string;
  password: string;
  website: string;
  agentName: string;
  companyWebsite: string;
  agentEmail: string;
}

interface StepperComponentProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const steps: string[] = [
  "Step 1: Sign up",
  "Step 2: Agent’s Voice",
  "Step 3: Agent Creation",
];

const StepperComponent: React.FC<StepperComponentProps> = ({ step, setStep }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
    website: "",
    agentName: "",
    companyWebsite: "",
    agentEmail: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: "",
    website: "",
    agentName: "",
    companyWebsite: "",
    agentEmail: "",
  });
  const cardData = [
    { id: 1, image: "/images/card1.svg", name: "Lilly", description: "Default" },
    { id: 2, image: "/images/card2.svg", name: "Chester", description: "Man Splainer" },
    { id: 3, image: "/images/card3.svg", name: "Crystal", description: "Easy Lay" },
    { id: 4, image: "/images/card4.svg", name: "Jack", description: "Go Getter" },
    { id: 5, image: "/images/card5.svg", name: "Nori", description: "Asian Dental" },
    { id: 6, image: "/images/card6.svg", name: "Anna", description: "Mexican Cousin" },
  ];
  
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleTogglePasswordVisibility = (): void => {
    setShowPassword((prevState) => !prevState);
  };

  const validateFormStepOne = (): boolean => {
    const newErrors: FormErrors = { name: "", email: "", password: "", website: "", agentName: "", companyWebsite: "", agentEmail: "" };

    if (!formValues.name) newErrors.name = "Please enter your name";
    if (!formValues.email) newErrors.email = "Please enter your email";
    if (!formValues.password) newErrors.password = "Please enter your password";
    if (!formValues.website) newErrors.website = "Please enter your company website";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleNext = (): void => {
    if (step === 0 && !validateFormStepOne()) return;
    setStep(step + 1);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
    <Grid
      container
      spacing={2}
      justifyContent="center"
      maxWidth="600px"
      margin="0px auto"
    >
      {steps.map((label, index) => (
        <Grid key={label} item xs={7} sm={6} md={4}>
          <Step active={step === index} completed={step > index}>
            <StepLabel
              slots={{ stepIcon: CustomStepIcon }}
              StepIconProps={{
                active: step === index,
                completed: step > index,
                icon: index + 1,
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#666666",
                }}
              >
                {label.split(":")[0]}
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "black",
                }}
              >
                {label.split(":")[1]}
              </Typography>
            </StepLabel>
          </Step>
        </Grid>
      ))}
    </Grid>

    <Box mt={4}>
      {step === 0 && (
        <div className="step_one">
          <Grid
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* Name Field */}
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "600", fontSize: "13px", marginBottom: 1 }}
              >
                Your Name
              </Typography>
              <TextField
                fullWidth
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
                placeholder="Enter your name"
                autoComplete="false"
                sx={{
                  borderRadius: "4px",
                }}
              />
            </Grid>

            {/* Email Field */}
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "600", fontSize: "13px", marginBottom: 1 }}
              >
                Email Address
              </Typography>
              <TextField
                fullWidth
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                placeholder="name@company.com"
                autoComplete="false"
                sx={{
                  borderRadius: "4px",
                }}
              />
            </Grid>

            {/* Password Field */}
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "600", fontSize: "13px", marginBottom: 1 }}
              >
                Password
              </Typography>
              <TextField
                fullWidth
                name="password"
                type={showPassword ? "text" : "password"}
                value={formValues.password}
                onChange={handleInputChange}
                error={!!errors.password}
                placeholder="At least 8 characters"
                autoComplete="false"
                sx={{
                  borderRadius: "4px",
                }}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Website Field */}
            <Grid item sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: "600", fontSize: "13px", marginBottom: 1 }}
              >
                Company Website
              </Typography>
              <TextField
                fullWidth
                name="website"
                value={formValues.website}
                onChange={handleInputChange}
                error={!!errors.website}
                helperText={errors.website}
                placeholder="www.yourwebsite.com"
                autoComplete="false"
                sx={{
                  borderRadius: "4px",
                }}
              />
            </Grid>
            <Typography className="step_one_para">
              By proceeding, you agree to the
              <br /> <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>
            </Typography>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ fontSize: "15px" }}
              className="step_one_btn"
            >
              Sign Up FREE{" "}
            </Button>
          </Grid>
        </div>
      )}
      {step === 1 && (
        <div className="step_two">
          <Grid item container spacing={2} justifyContent="center">
            {cardData.map((card) => (
              <Grid item xs={12} sm={6} md={4} key={card.id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    borderRadius: "8px",
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      width: "216px",
                      height: "206px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: 2,
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  {/* Paragraph */}
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#888888",
                    }}
                  >
                    {card.description}
                  </Typography>
                  {/* Name */}
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: "18px",
                      marginBottom: "5px",
                    }}
                  >
                    {card.name}
                  </Typography>
                  {/* Circular Checkbox */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id={`checkbox-${card.id}`}
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        appearance: "none",
                        backgroundColor: "white",
                        border: "2px solid gray",
                        position: "relative",
                        transition:
                          "background-color 0.3s, border-color 0.3s",
                      }}
                      onChange={(e) => console.log(e.target.checked)} // Handle state here
                    />
                    <style>
                      {`
    input[type="checkbox"]:checked {
      background-color: black !important;
      border-color: black;
    }
    input[type="checkbox"]:checked::before {
      content: '\\2713'; /* Unicode for tick */
      font-size: 12px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
    }
  `}
                    </style>
                  </Box>
                </Box>
              </Grid>
            ))}
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ fontSize: "15px" }}
              className="step_one_btn"
            >
              Continue
              <FaArrowRightLong />
            </Button>
          </Grid>
        </div>
      )}

{step === 2 && (
        <div className="step_one">
          <Grid
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
              <img src="/images/step_3.svg" alt="" />
              <Typography style={{fontSize:"18px", fontWeight:"500", color:"#616161", marginTop:"10px"}}>Asian Dental</Typography>
              <Typography style={{fontWeight:"600",fontSize:"24px"}}>Nori Yamaguchi</Typography>
            </div>
            {/* Agent Name */}
            <Grid item sx={{ width: "100%" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "13px", marginBottom: 1 }}>
              Name Your Agent
              </Typography>
              <TextField
fullWidth
name="agentName"
value={formValues.agentName}
onChange={handleInputChange}
error={!!errors.agentName}
helperText={errors.agentName}
placeholder="Nori"
sx={{ borderRadius: '4px' }}
InputProps={{
  endAdornment: (
    <InputAdornment position="end">
      <IconButton sx={{backgroundColor:"#666666", borderRadius:"4px", color:"white", fontSize:"14px", width:"86px", height:"34px"}}>
        Generate 
      </IconButton>
    </InputAdornment>
  ),
}}
/>
            </Grid>

            {/* Company Website */}
            <Grid item sx={{ width: "100%" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "13px", marginBottom: 1 }}>
              Company Website <span style={{color:"#616161", fontWeight:"400"}}>(So your agent can get to know you)</span>
              </Typography>
              <TextField
                fullWidth
                name="companyWebsite"
                value={formValues.companyWebsite}
                onChange={handleInputChange}
                error={!!errors.companyWebsite}
                helperText={errors.companyWebsite}
                placeholder="www.companywebsite.com"
                sx={{ borderRadius: "4px" }}
              />
            </Grid>

            {/* Agent Email */}
            <Grid item sx={{ width: "100%" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "13px", marginBottom: 1 }}>
              Email <span style={{color:"#616161", fontWeight:"400"}}>(So can send you the link)</span>
              </Typography>
              <TextField
                fullWidth
                name="agentEmail"
                value={formValues.agentEmail}
                onChange={handleInputChange}
                error={!!errors.agentEmail}
                helperText={errors.agentEmail}
                placeholder="agent@company.com"
                sx={{ borderRadius: "4px" }}
              />
            </Grid>

            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ fontSize: "15px" }}
              className="step_one_btn"
            >
              Continue
              <FaArrowRightLong />
            </Button>
          </Grid>
        </div>
      )}
    </Box>
  </Box>
  );
};

export default StepperComponent;
