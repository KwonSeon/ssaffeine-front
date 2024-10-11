import Image from "next/image";
import Link from "next/link";
import AchievementMeter from "../molecules/AchievementMeter";
import Menu from "../molecules/Menu";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/react";

//test
export default function Headers() {
  return (
    // <nav className="bg-slate-400 flex justify-between p-4">
    //   <div className="flex gap-4 ">
    //     <Link href={"/"}>
    //       <Image src={"/img/ssaffeine_logo.png"} width={200} height={100} alt="logo" />
    //     </Link>

    //     <div>
    //       <AchievementMeter achievement={20} />
    //     </div>
    //   </div>

    //   <Menu />
    // </nav>
    <Navbar isBordered className="w-full">
      <NavbarBrand className="max-w-[100px]">
        <Link href={"/"}>
          <Image src={"/img/ssaffeine_logo.png"} width={100} height={100} alt="logo" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden lg:flex">
        <NavbarItem>
          <AchievementMeter achievement={20} />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="w-full hidden lg:flex">
        <Menu />
      </NavbarContent>
      <NavbarContent justify="end" className="lg:hidden">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu className="lg:hidden">
        <Menu isMobile />
      </NavbarMenu>
    </Navbar>
  );
}
