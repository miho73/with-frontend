import {Outlet, useNavigate } from 'react-router-dom';
import {useAppSelector} from "../../modules/hooks/ReduxHooks.ts";
import {useEffect} from "react";

function AuthenticationHost() {
  const userInfo = useAppSelector(state => state.userInfoReducer);

  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    if(userInfo.authenticated) {
      if(searchParams.has('redirect')) {
        navigate(searchParams.get('redirect')!);
      }
      else {
        navigate('/');
      }
    }
  }, [navigate, userInfo]);

  return (
    <Outlet />
  );
}

export default AuthenticationHost;
