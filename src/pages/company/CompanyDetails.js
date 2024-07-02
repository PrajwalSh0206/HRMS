import React from "react";
import styled from "styled-components";
import HRM from "../../assets/images/Logo.jpg";
import { Button, TextField } from "@mui/material";
import { COMPANY_DETAILS, FREE_TRIAL } from "../../constants/textConstants";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Modal from "../../components/Modal";

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

const focusedTextFieldStyle = {
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#8D75F5",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#8D75F5",
  },
};

export default function CompanyDetails() {
  return (
    <MainContainer>
      <div>
        <LogoContainer>
          <img src={HRM} />
          <Text>{COMPANY_DETAILS}</Text>
        </LogoContainer>
        <FormContainer>
          <TextField
            id="filled-basic"
            label="Company Name"
            variant="outlined"
            sx={focusedTextFieldStyle}
            minRows={3}
          />
          <TextField
            id="filled-basic"
            label="Company Address"
            variant="outlined"
            sx={focusedTextFieldStyle}
          />
          <TextField
            id="filled-basic"
            label="Register Number"
            variant="outlined"
            sx={focusedTextFieldStyle}
          />
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
          >
            Submit
          </Button>
        </SignupBtn>

        <Modal text={"HELLO"} />
      </div>
    </MainContainer>
  );
}
