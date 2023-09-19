"use client";
import Link from "next/link";
import { MenuItens, NavLink } from "../styles/navBarStyle";

export function NavBar() {
  return (
    <MenuItens>
      <NavLink>
        <Link href={"/"}>
          <span>#</span>Principal
        </Link>
      </NavLink>
      <NavLink>
        <Link href={"/projects"}>
          <span>#</span>Projects
        </Link>
      </NavLink>
      <NavLink>
        <Link href={"/about"}>
          <span>#</span>Sobre
        </Link>
      </NavLink>
      <NavLink>
        <Link href={"/contact"}>
          <span>#</span>Contato
        </Link>
      </NavLink>
    </MenuItens>
  );
}
