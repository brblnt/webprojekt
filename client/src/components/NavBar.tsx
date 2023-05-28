import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);

  const onLogout = () => {
    dispatch(logout() as any);
    navigate('/login');
  };

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Cosa Nostra</Link>
      </div>
      <ul>
        {user && user.role === 'ADMIN' && (
          <>
            <li>
              <Link to='/accommodation/post'>Create Accommodation</Link>
            </li>
            <li>
              <Link to='/accommodation'>Accommodation Page</Link>
            </li>
          </>
        )}
        {user && user.role === 'ACCOMMODATION' && (
          <li>
            <Link to='/accommodation/post'>Create Accommodation</Link>
          </li>
        )}
        {user && user.role === 'APPLICATION_USER' && (
          <li>
            <Link to='/accommodation'>Search Accommodation</Link>
          </li>
        )}
        {user && (
          <li>
            <button className='btn' onClick={onLogout}>
              Logout
            </button>
          </li>
        )}
        {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default NavBar;
