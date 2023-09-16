"use client";
import Link from "next/link";
import { MenuItens, NavLink } from "../styles/navBarStyle";

export function NavBar() {
  return (
    <MenuItens>
      <NavLink href="/">
        <span>#</span>Principal
      </NavLink>
      <NavLink href="/projects">
        <span>#</span>Projects
      </NavLink>
      <NavLink href="/about">
        <span>#</span>Sobre
      </NavLink>
      <NavLink href="/contact">
        <span>#</span>Contato
      </NavLink>
    </MenuItens>
  );
}
