'use client';
import Link from 'next/link';
import navStyle from './ParentNav/ParentNav.module.css';
import { usePathname } from 'next/navigation';

const NavLink = ({ routes }) => {
  const router = usePathname();
  const { name, route } = routes;

  return (
    <Link href={route} className={`${route === router ? navStyle.highlighted : navStyle.link}`}>
      {name}
    </Link>
  );
};

export default NavLink;
