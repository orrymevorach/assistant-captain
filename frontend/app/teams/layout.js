'use client';
import { useState, createContext } from 'react';
import Nav from '../../components/Nav/Nav';
import teamsStyle from './Teams.module.css';

export const TeamsContext = createContext(null);

export default function TeamLayout({ children }) {
    const [teamList, setTeamList] = useState([]);
    return (
        <div className={teamsStyle.grid}>
            <TeamsContext.Provider value={{ teamList, setTeamList }}>
                <Nav teams={teamList} />
                {children}
            </TeamsContext.Provider>
        </div>
    );
}
