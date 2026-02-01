import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    // TODO: Get user from state
    const user = JSON.parse(localStorage.getItem('user'));

    const onLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>TaskFlow</Link>
            </div>
            <ul>
                {user ? (
                    <li>
                        <button className='btn' onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Header;
