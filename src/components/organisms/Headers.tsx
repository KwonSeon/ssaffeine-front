import Image from 'next/image';
import Link from 'next/link';
import AchievementMeter from '../molecules/AchievementMeter';
import Menu from '../molecules/Menu';

export default function Header() {
  return (
    <header className='bg-slate-400 flex justify-between p-4'>
      <div className='flex gap-4 '>
        <Link href={'/'}>
          <Image src={'/img/ssaffeine_logo.png'} width={200} height={100} alt='logo' />
        </Link>

        <div>
          <AchievementMeter achievement={20} />
        </div>
      </div>

      <Menu />
    </header>
  );
}
