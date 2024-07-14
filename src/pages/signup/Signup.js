import React, { useState } from "react";
import styled from "styled-components";
import HRM from "../../assets/images/Logo.jpg";
import { Button, TextField } from "@mui/material";
import {
  FREE_TRIAL,
  EMAIL_ERROR_MESSAGE,
  MOBILE_ERROR_MESSAGE,
} from "../../constants/textConstants";
import { Link, useNavigate } from "react-router-dom";
import { EMAIL, MOBILE_REGEX } from "../../constants/regex";

const MainContainer = styled.div`
  max-width: 900px;
  margin: 200px auto;
`;
const Text = styled.span`
  display: block;
  margin: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
`;

const LogoContainer = styled.div`
  max-width: 100%;
  text-align: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  margin: 20px auto;
  gap: 20px;
`;

const Error = styled.span`
  padding: 5px;
  font-size: 14px;
  color: #8b0a1a;
`;

const SignupBtn = styled.div`
  display: block;
  text-align: center;
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 20px;
  letter-spacing: 1px;
  font-weight: 600;
`;

const focusedTextFieldStyle = {
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#8D75F5",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#8D75F5",
  },
};

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [mobileError, setMobileError] = useState(false);
  const [mobileErrorMessage, setMobileErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    if (name === "userName") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
      if (!EMAIL.test(value)) {
        setEmailError(true);
        setEmailErrorMessage(EMAIL_ERROR_MESSAGE);
      } else {
        setEmailError(false);
        setEmailErrorMessage("");
      }
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "mobileNumber") {
      setMobileNumber(value);
      if (!MOBILE_REGEX.test(value)) {
        setMobileError(true);
        setMobileErrorMessage(MOBILE_ERROR_MESSAGE);
      } else {
        setMobileError(false);
        setMobileErrorMessage("");
      }
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      name &&
      email &&
      password &&
      mobileNumber &&
      !emailError &&
      !mobileError
    ) {
      navigate("/mobile-otp");
    } else {
      console.log("Please fill all the fields correctly");
    }
  };

  return (
    <MainContainer>
      <div>
        <LogoContainer>
          <img src={HRM} alt="Logo" />
          <Text>{FREE_TRIAL}</Text>
        </LogoContainer>
        <FormContainer>
          <TextField
            id="filled-basic"
            label="Name"
            variant="outlined"
            sx={focusedTextFieldStyle}
            onChange={handleSignupChange}
            value={name}
            name="userName"
          />
          <TextField
            id="filled-basic"
            label="Email"
            variant="outlined"
            sx={focusedTextFieldStyle}
            onChange={handleSignupChange}
            name="email"
            value={email}
            error={emailError}
          />
          {emailError && <Error>{emailErrorMessage}</Error>}
          <TextField
            id="filled-basic"
            label="Password"
            variant="outlined"
            sx={focusedTextFieldStyle}
            onChange={handleSignupChange}
            name="password"
            value={password}
          />
          <TextField
            id="filled-basic"
            label="Phone Number"
            variant="outlined"
            sx={focusedTextFieldStyle}
            onChange={handleSignupChange}
            name="mobileNumber"
            value={mobileNumber}
            inputProps={{ maxLength: 10 }}
            error={mobileError}
          />
          {mobileError && <Error>{mobileErrorMessage}</Error>}
        </FormContainer>
        <SignupBtn>
          <Button
            variant="outlined"
            sx={{
              border: "none",
              border: "1px solid #ccc",
              padding: "12px",
              width: "60%",
              borderRadius: "10px",
              backgroundColor: "#8D75F5",
              color: "#fff",
              fontSize: "17px",
              fontWeight: 700,
              letterSpacing: "0.7px",
              "&:hover": {
                backgroundColor: "#8D75F5",
              },
            }}
            onClick={handleSignup}
          >
            FREE SIGN UP
          </Button>
        </SignupBtn>
        <LoginLink>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </LoginLink>
      </div>
    </MainContainer>
  );
}
