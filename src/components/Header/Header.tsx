import React from "react";

import {
  HeaderContainer,
  Title,
  HeaderIconsContainer,
  LogoutButton,
} from "./styed";
const Header: React.FC = () => {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <HeaderContainer>
      <Title>Weather App</Title>
      <HeaderIconsContainer>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
