"use client";
import Link from "next/link";
import { MenuItens, NavLink } from "./styles/navBarStyle";
import { useState } from "react";
import { StyleSheetManager } from "styled-components";

export function NavBar({ closeMenu }: { closeMenu: () => void }) {
  const [currentPath, setCurrentPath] = useState("/");

  const handleChange = (newPath: string) => {
    setCurrentPath(newPath);
  };

  const shouldForwardProp = (prop: string) => {
    return prop !== "isActive";
  };

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
    <MenuItens>
      <NavLink isActive={currentPath === "/"} onClick={() => handleChange("/")}>
        <Link href={"/"} onClick={closeMenu}>
          <span>#</span>Principal
        </Link>
      </NavLink>
      <NavLink
        isActive={currentPath === "/projects"}
        onClick={() => handleChange("/projects")}
      >
        <Link href={"/projects"} onClick={closeMenu}>
          <span>#</span>Projects
        </Link>
      </NavLink>
      <NavLink
        isActive={currentPath === "/about"}
        onClick={() => handleChange("/about")}
      >
        <Link href={"/about"} onClick={closeMenu}>
          <span>#</span>Sobre
        </Link>
      </NavLink>
      <NavLink
        isActive={currentPath === "/contact"}
        onClick={() => handleChange("/contact")}
      >
        <Link href={"/contact"} onClick={closeMenu}>
          <span>#</span>Contato
        </Link>
      </NavLink>
    </MenuItens>
    </StyleSheetManager>
  );
}
