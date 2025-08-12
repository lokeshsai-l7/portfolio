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
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <header className="mt-4  sticky justify-center w-full max-w-2xl">
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

        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isOpen ? <RxCross2 /> : <HiOutlineMenu />}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-3 space-y-2 bg-white  p-4 rounded-lg ">
          {navLinks.map((link) => (
            <li onClick={() => setActive(link.id)} key={link.id}>
              <a
                href={link.href}
                className={`block transition duration-200 transform hover:scale-105 ${
                  active === link.id ? "underline" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
