import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: ${(props) => props.maxWidth || "500px"};
  width: ${(props) => props.width || "80%"};
  color: ${(props) => props.color || "#000"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.padding || "20px"};
  box-sizing: border-box;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: ${(props) => props.fontSize || "16px"};
  cursor: pointer;
`;

export default function Modal({
  handleClose,
  width,
  maxWidth,
  color,
  text,
  borderRadius,
  fontSize,
  padding
}) {
  return (
    <MainContainer>
      <ModalContent
        width={width}
        maxWidth={maxWidth}
        color={color}
        borderRadius={borderRadius}
        padding={padding}
      >
        <CloseButton onClick={handleClose} fontSize={fontSize}>
          &times;
        </CloseButton>
        {text && <span>{text}</span>}
      </ModalContent>
    </MainContainer>
  );
}
