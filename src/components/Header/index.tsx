import { NavItem } from '@/types/nav';
import Link from 'next/link';

const Header = ({ nav }: { nav: NavItem[] }) => (
  <header>
    {nav.map(({ text, href }) => (
      <Link key={href} href={href}>
        {text}
      </Link>
    ))}
  </header>
);

export default Header;
