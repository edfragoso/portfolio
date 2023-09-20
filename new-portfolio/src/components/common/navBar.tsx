"use client";
import Link from "next/link";
import { MenuItens, NavLink } from "../styles/navBarStyle";

export function NavBar({ closeMenu }: { closeMenu: () => void }) {
  return (
    <MenuItens>
      <NavLink>
        <Link href={"/"} onClick={closeMenu}>
          <span>#</span>Principal
        </Link>
      </NavLink>
      <NavLink>
        <Link href={"/projects"} onClick={closeMenu}>
          <span>#</span>Projects
        </Link>
      </NavLink>
      <NavLink>
        <Link href={"/about"} onClick={closeMenu}>
          <span>#</span>Sobre
        </Link>
      </NavLink>
      <NavLink>
        <Link href={"/contact"} onClick={closeMenu}>
          <span>#</span>Contato
        </Link>
      </NavLink>
    </MenuItens>
  );
}
