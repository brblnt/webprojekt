import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../../features/auth/authSlice';

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (!user) {
      navigate('/login');
      dispatch(logout() as any);
    }
  }, [user, navigate, isError, message, dispatch]);

  return (
    <div>
      {user && user.userName ? 'Welcome ' + user.userName : ''}
    </div>
  );
};
