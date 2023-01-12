import Nav from '../../components/Nav/Nav';
import teamsStyle from './Teams.module.css';

export default function TeamLayout({ children }) {
    return (
        <div className={teamsStyle.grid}>
            <Nav />
            {children}
        </div>
    );
}
