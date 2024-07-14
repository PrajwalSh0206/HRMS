import React, { useState } from "react";
import styled from "styled-components";
import HRM from "../../assets/images/Logo.jpg";
import { Button, TextField } from "@mui/material";
import { LOGIN_HERE, WELCOME } from "../../constants/textConstants";
import { Link } from "react-router-dom";

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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  console.log(email);
  console.log(password);

  const handleChange = (e) => {
    let errorMsg;
    if (name == "email") setEmail(e.target.value);
    if (name == "password") setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) setDisable(true);
  };
  return (
    <MainContainer>
      <div>
        <LogoContainer>
          <img src={HRM} />
          <Text>{WELCOME}</Text>
          <Text>{LOGIN_HERE}</Text>
        </LogoContainer>
        <FormContainer>
          <TextField
            id="filled-basic"
            label="Email"
            variant="outlined"
            sx={focusedTextFieldStyle}
            name="email"
            onChange={handleChange}
          />
          <TextField
            id="filled-basic"
            label="Password"
            variant="outlined"
            sx={focusedTextFieldStyle}
            name="password"
            onChange={handleChange}
          />
        </FormContainer>
        <SignupBtn>
          <Button
            variant="outlined"
            value="Login"
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
            onSubmit={handleSubmit}
            disabled={disable}
          >
            Login
          </Button>
        </SignupBtn>
        <LoginLink>
          <span>
            Dont have an account ? <Link to="/signup">Signup</Link>
          </span>
        </LoginLink>
      </div>
    </MainContainer>
  );
}
