import React from "react";
import styled from "styled-components";
import Search from "../assets/images/search.svg";
import HRM from "../assets/images/hrm.png";

const HeaderContainer = styled.div`
  max-width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 80px;
  margin-top: 40px;
`;
const NameText = styled.span`
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 600;
`;
const GreetingsText = styled.span`
  display: block;
  font-size: 15px;
  padding: 10px;
  font-weight: 500;
  letter-spacing: 0.7px;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
`;

const SearchImage = styled.img`
  width: 30px;
  font-weight: 700;
`;

const Input = styled.input.attrs({ type: "text" })`
  border: none;
  padding: 6px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`;

const ProfileText = styled.span`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1.3px;
`;
export default function Header(props) {
  return (
    <HeaderContainer>
      <div>
        <NameText>{props?.name}</NameText>
        <GreetingsText>{props?.greetings}</GreetingsText>
      </div>

      <SearchContainer>
        <SearchImage src={Search} />
        <Input type="search" placeholder="Search..." />
      </SearchContainer>

      <Profile>
        <ProfileImage src={HRM} />
        <ProfileText>Navneeth Poojary</ProfileText>
      </Profile>
    </HeaderContainer>
  );
}
