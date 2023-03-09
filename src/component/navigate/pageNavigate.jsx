import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const PageNavigate = ({pagetitle}) => {
    const navigate = useNavigate();
    const back = () => navigate(-1);
    return (
        <>
            <div className="navigate">
                <button className='go-back' onClick={back}>
                    <ArrowBackIosIcon />
                </button>
                <div className="pgae-name">
                    {pagetitle}
                </div>
            </div>
        </>
    )
}
export { PageNavigate }