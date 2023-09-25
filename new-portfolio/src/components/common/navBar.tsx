'use client'
import Link from "next/link";
import { MenuItens, NavLink } from "./styles/navBarStyle";
import { useState } from "react";
import { StyleSheetManager } from "styled-components";
import { usePathname } from "next/navigation";

export function NavBar({ closeMenu }: { closeMenu: () => void }) {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
    
  const handleChange = (pathname: string) => {
    setCurrentPath(pathname);
  };
  
  const shouldForwardProp = (prop: string) => {
    return prop !== "isActive";
  };

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <MenuItens>
        <NavLink
          isActive={pathname === "/"}
          onClick={() => handleChange(pathname)}
        >
          <Link href={"/"} onClick={closeMenu}>
            <span>#</span>Principal
          </Link>
        </NavLink>
        <NavLink
          isActive={pathname === "/projects"}
          onClick={() => handleChange(pathname)}
        >
          <Link href={"/projects"} onClick={closeMenu}>
            <span>#</span>Projects
          </Link>
        </NavLink>
        <NavLink
          isActive={pathname === "/about"}
          onClick={() => handleChange(pathname)}
        >
          <Link href={"/about"} onClick={closeMenu}>
            <span>#</span>Sobre
          </Link>
        </NavLink>
        <NavLink
          isActive={pathname === "/contact"}
          onClick={() => handleChange(pathname)}
        >
          <Link href={"/contact"} onClick={closeMenu}>
            <span>#</span>Contato
          </Link>
        </NavLink>
      </MenuItens>
    </StyleSheetManager>
  );
}
