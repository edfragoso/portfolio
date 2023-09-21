"use client";
import { Logo } from "../icons/logoEdCode";
import { MenuHamb } from "../icons/menuHamb";
import { CloseIcon } from "../icons/closeIcon";
import { NavBar } from "./navBar";
import {
  HeaderContainer,
  LogoContent,
  MenuItems,
  MenuStyle,
} from "./styles/headerStyle";
import { useState } from "react";

export function Header() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };
  
  return (
    <HeaderContainer>
      <LogoContent>
        <Logo />
      </LogoContent>
      <MenuStyle $show={menuVisible} onClick={toggleMenu}>
        {menuVisible ? <CloseIcon /> : <MenuHamb />}
      </MenuStyle>
      <MenuItems $show={!menuVisible}>
        <NavBar closeMenu={closeMenu} />
      </MenuItems>
    </HeaderContainer>
  );
}
