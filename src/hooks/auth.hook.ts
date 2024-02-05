'use client';
import cookie from 'cookie';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getUser, setAuthUser } from 'store/slices/user.slices';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const { isAuth } = useAppSelector(getUser);

  useEffect(() => {
    if (isAuth === null) {
      const { email } = cookie.parse(document.cookie);
      dispatch(setAuthUser(email));
    }
  }, []);

  return { isAuth };
};
