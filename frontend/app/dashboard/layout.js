import Nav from '../../components/Nav/Nav';
import dashStyle from './Dashboard.module.css';

export default function DashboardLayout({ children }) {
    return (
        <div className={dashStyle.grid}>
            <Nav />
            { children }
        </div>
    )
  }