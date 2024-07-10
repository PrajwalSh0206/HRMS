import React from "react";
import styled from "styled-components";
import HRM from "../assets/images/hrm.png";
import { HRM_TEXT } from "../constants/textConstants";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 300px;
  min-width: 300px;
  margin: 20px;
  min-height: 90vh;
  background-color: #eaeaea;
  padding: 10px;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
  margin-left: 30px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const Text = styled.span`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
`;

const Contents = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: inherit;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Li = styled.li`
  list-style: none;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ffffff;
    transform: scale(1.05);
    border-radius: 5px;
    border-left: 3px solid #8d75f5;
  }
`;

const ContentImage = styled.img`
  width: 30px;
  height: 30px;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  letter-spacing: 1.2px;
  font-weight: 500;
  width: 100%;

  &:hover {
    color: #8d75f5;
    font-weight: 700;
  }
`;

export default function Sidebar(props) {
  return (
    <Container>
      <ImageContainer>
        <Image src={HRM} />
        <Text>{HRM_TEXT}</Text>
      </ImageContainer>

      <Contents>
        <Ul>
          {props?.contents?.map((content, index) => (
            <Li key={index}>
              <ContentImage src={content?.icon} />
              {content.link ? (
                <StyledLink to={content.link}>{content.text}</StyledLink>
              ) : (
                <span>{content.text}</span>
              )}
            </Li>
          ))}
        </Ul>
      </Contents>
    </Container>
  );
}
