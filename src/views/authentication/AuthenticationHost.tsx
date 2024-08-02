import {Outlet, useNavigate } from 'react-router-dom';
import { VHCenter } from "../layouts/Alignment.tsx";
import {useAppSelector} from "../../modules/hooks/ReduxHooks.ts";
import {useEffect} from "react";

function AuthenticationHost() {
  const userInfo = useAppSelector(state => state.userInfoReducer);

  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    if(userInfo.signin) {
      if(searchParams.has('redirect')) {
        navigate(searchParams.get('redirect')!);
      }
      else {
        navigate('/');
      }
    }
  }, [navigate, userInfo]);

  return (
    <VHCenter className={'h-screen'} as={'main'}>
      <Outlet />
    </VHCenter>
  );
}

export default AuthenticationHost;
