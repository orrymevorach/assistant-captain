'use client';
import Link from 'next/link';
import navStyle from './ParentNav/ParentNav.module.css';
import { usePathname } from 'next/navigation';

const NavLink = ({ routes }) => {
  const router = usePathname();
  const { name, route } = routes;

  return (
    <Link
      href={route}
      className={`${navStyle.link} ${route === router ? navStyle.highlighted : undefined}`}
    >
      {name}
    </Link>
  );
};

export default NavLink;
