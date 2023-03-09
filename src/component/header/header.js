import { useAuth } from '../../store/hooks/auth';
import avatar from '../../img/photol.png';
const Header = () => {
    const { email, username } = useAuth();
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="profile">
                        <div className="avatar">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className="profie-info">
                            <div className="profile-name">
                                {username}
                            </div>
                            <div className="profile-mail">
                                {email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export { Header }