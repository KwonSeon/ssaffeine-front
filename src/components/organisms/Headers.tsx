'use client';
import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import AchievementMeter from '../molecules/AchievementMeter';
import HeadersMenu from '../molecules/HeadersMenu';
import Menu from '../molecules/Menu';

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <Navbar isBordered className='w-full' isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand className='max-w-[100px]'>
        <Link href={'/'}>
          <Image src={'/img/ssaffeine_logo.png'} width={100} alt='logo' />
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden lg:flex'>
        <NavbarItem>
          <AchievementMeter achievement={20} />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end' className='w-full hidden lg:flex'>
        <Menu />
      </NavbarContent>
      <NavbarContent justify='end' className='lg:hidden'>
        <NavbarMenuToggle />
      </NavbarContent>
      <div className='flex lg:hidden'>
        <HeadersMenu setIsMenuOpen={setIsMenuOpen} />
      </div>
    </Navbar>
  );
}
