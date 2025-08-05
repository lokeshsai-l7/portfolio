import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../components/lightswind/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../components/lightswind/navigation-menu";
import avatarImg from "../assets/profile-pictures/avatar.jpeg";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <header className="mt-4 flex sticky justify-center w-full max-w-2xl">
      <div className="bg-white rounded-xl p-2  w-full flex justify-between items-center">
        <Avatar className="mr-5">
          <AvatarImage src={avatarImg} alt="avatar" />
          <AvatarFallback>Loki</AvatarFallback>
        </Avatar>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuItem className="list-none flex gap-2">
            {navLinks.map((link) => (
              <NavigationMenuLink
                key={link.id}
                href={link.href}
                onClick={() => setActive(link.id)}
                className={`transition duration-200 transform hover:scale-105 ${
                  active === link.id ? "underline" : ""
                }`}
              >
                {link.label}
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenu>
        <div className="md:hidden text-3xl">
          <HiOutlineMenu />
        </div>
      </div>
    </header>
  );
}
