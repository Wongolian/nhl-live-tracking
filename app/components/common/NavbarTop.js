'use client'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";

function NavbarTop() {

  return (
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
      </NavbarContent><NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          TODAYS GAMES
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="ghost" radius="sm">
            Refresh
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default NavbarTop;
