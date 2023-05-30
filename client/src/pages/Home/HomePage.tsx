import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logout } from '../../features/auth/authSlice';
import { getaccomms } from '../../features/accommodation/accommodationSlice';
import { AccommodationItem } from '../Accommodation/components/AccommodationItem';

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector( 
    (state: any) => {
      console.log(state); // Log the Redux state
      return state.auth;
    }
  );

  const { accommodations } = useSelector( 
    (state: any) => {
      console.log(state); // Log the Redux state
      return state.accomm;
    }
  );

  useEffect(() => {
    if (isError) { 
      toast.error(message);
    }

    if (!user) {
      navigate('/login');
      dispatch(logout() as any);
    } else {
      const authId = user.authenticationData.id
      dispatch(getaccomms(authId) as any)
    }

  }, [user, navigate, isError, message, dispatch]);

  return (
    <div>
      {user && user.authenticationData.userName ? 'Welcome ' + user.authenticationData.userName : ''}
    
            <section className='content'>
            {accommodations.length > 0 ? (
              <div className='items'>
                {accommodations.map((accommodation: any) => (
                <AccommodationItem key={accommodation._id} accommodation={accommodation}/>
               ))}
              </div>
                  ) : (
                    <h3>You have not created any accommodations</h3>
                  )}
          </section>
  </div>
  );
};
