'use client';
import getAcheivementCount from '@/app/api/serveractions/getAcheivementCount';
import useSurveyContext from '@/context/SurveyIdProvider';
import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AchievementMeter from '../molecules/AchievementMeter';
import HeadersMenu from '../molecules/HeadersMenu';
import Menu from '../molecules/Menu';

export default function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { surveysId } = useSurveyContext();
  const [achievement, setAchievement] = useState<number>(0);

  useEffect(() => {
    if (surveysId === undefined || surveysId === 0) return;

    const fetchAchievement = async () => {
      try {
        const cnt = await getAcheivementCount(surveysId);
        setAchievement(cnt);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAchievement();
  }, [surveysId]);

  return (
    <Navbar isBordered className='w-full' isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand className='max-w-[100px]'>
        <Link href={'/'}>
          <Image src={'/img/ssaffeine_logo.png'} width={100} alt='logo' />
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden lg:flex'>
        <NavbarItem>
          <AchievementMeter achievement={achievement} />
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
