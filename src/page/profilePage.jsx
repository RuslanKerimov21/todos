import { useAuth } from '../store/hooks/auth';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../store/reducer/userReducer";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { PageNavigate } from '../component/navigate/pageNavigate';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import avatar from '../img/photol.png';
const ProfilePage = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const { email, username } = useAuth();
    const tasks = useSelector(state => state.tasks.tasks);
    const removedUsed = () => {
        dispatch(removeUser())
        history('/login')
    }
    return (
        <>
            <div className="container">
                <PageNavigate
                    pagetitle="Профиль"
                />
                <div className="profile-inner">
                    <div className="profile-page__info">
                        <div className="profile-page__avatar">
                            <img src={avatar} alt="photo" />
                        </div>
                        <div className="profile-name">
                            {username}
                        </div>
                        <div className="profile-mail">
                            {email}
                        </div>
                    </div>
                    <div className="profile-statistic">
                        <div className="statistic-text">
                            Статистика по здачам
                        </div>
                        <div className="task">
                            <div className="total-task task-item">
                                <AssignmentOutlinedIcon />
                                <span className='text'>Всего задач</span>
                                <span>{tasks.length}</span>
                            </div>
                            <div className="complete-task task-item">
                                <CheckOutlinedIcon />
                                <span className='text'>Выполено всего</span>
                                <span>{tasks?.filter(t => t.completed)?.length}</span>
                            </div>
                        </div>
                    </div>
                    <div className="exit">
                        <button onClick={() => removedUsed()}>
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { ProfilePage }