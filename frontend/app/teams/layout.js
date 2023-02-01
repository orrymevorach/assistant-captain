'use client';
import Nav from '@components/Nav/ParentNav/ParentNav';
import teamsStyle from './Teams.module.css';
import { UserContextProvider } from '@user-context';

export default function TeamLayout({ children }) {
  return (
    <UserContextProvider>
      <div className={teamsStyle.grid}>
        <Nav />
        {children}
      </div>
    </UserContextProvider>
  );
}
