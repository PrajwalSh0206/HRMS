import React, { useState } from "react";
import styled from "styled-components";
import OtpInput from "react-otp-input";
import PrimaryButton from "../../components/PrimaryButton";

const OtpContainer = styled.div`
  max-width: 700px;
  margin: 300px auto;
  padding: 80px;
`;

const OtpText = styled.span`
  display: block;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const HeaderText = styled.span`
  display: block;
  font-size: 18px;
  color: gray;
  font-weight: 600;
  letter-spacing: 1.2px;
  width: 100%;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  width: 90%;
`;

export default function Otp() {
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    console.log("OTP Value: ", otp);
    setOtp(otp);
  };

  return (
    <OtpContainer>
      <div>
        <OtpText>Enter OTP</OtpText>
      </div>

      <div>
        <HeaderText>
          Please enter the 6 digit verification code received on your registered
          mobile number
        </HeaderText>
      </div>

      <div>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          renderSeparator={<span></span>}
          inputStyle={{
            padding:"10px 0",
            width:"1.5em",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #8D75F5",
            color: "#000",
            backgroundColor: "#fff",
            fontSize: "45px",
          }}
          focusStyle={{
            border: "1px solid #8D75F5",
            color: "#000",
            backgroundColor: "#fff",
            fontSize: "20px",
          }}
          renderInput={(props) => (
            <input
              {...props}
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              onCopy={(e) => {
                e.preventDefault();
                return false;
              }}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          )}
        />
      </div>

      <ButtonContainer>
        <PrimaryButton
          value={"Verify"}
          width={"100%"}
          backgroundColor={"#8D75F5"}
          marginTop={"20px"}
          fontSize={"20px"}
          letterSpacing={"1px"}
          textcolor={"#fff"}
          fontWeight={"700"}
        />
      </ButtonContainer>
    </OtpContainer>
  );
}
