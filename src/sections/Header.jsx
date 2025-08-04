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

export default function Header() {
  return (
    <header className=" mt-4 flex sticky justify-center ">
      <div className="bg-white  rounded-xl p-2 max-w-2xl  flex items-center">
        <>
          <Avatar className="mr-5">
            <AvatarImage src={avatarImg} alt="avatar" />
            <AvatarFallback>Loki</AvatarFallback>
          </Avatar>
        </>
        <>
          <NavigationMenu>
            <NavigationMenuItem className="list-none">
              <NavigationMenuLink href="#home">Home</NavigationMenuLink>
              <NavigationMenuLink href="#about">About</NavigationMenuLink>
              <NavigationMenuLink href="#skills">Skills</NavigationMenuLink>
              <NavigationMenuLink href="#experience">
                Experience
              </NavigationMenuLink>
              <NavigationMenuLink href="#projects">Projects</NavigationMenuLink>
              <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
        </>
      </div>
    </header>
  );
}
