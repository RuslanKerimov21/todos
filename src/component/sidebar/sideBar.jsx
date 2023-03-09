import { Link } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddIcon from '@mui/icons-material/Add';
import './sidebar.css'
const SideBar = () => {
    return (
        <div className="sidebar container">
            <div className="sidebar-inner">
                <ul className='sidebar_list'>
                    <li>
                        <Link to="/category">
                            <ListIcon />
                            Категории
                        </Link>
                    </li>
                    <li>
                        <Link to="/alltasks">
                            <ListAltIcon />
                            Задачи
                        </Link>
                    </li>
                    <li className="add-category">
                        <Link to="/addtasks" className='add-category'>
                            <AddIcon />
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendar">
                            <CalendarMonthIcon />
                            Календарь
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <PersonOutlineIcon />
                            Профиль
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export { SideBar }