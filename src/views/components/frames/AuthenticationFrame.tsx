import {Outlet, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../modules/hooks/ReduxHooks.ts";
import {useEffect, useState} from "react";
import {VHCenter} from "../../layouts/Alignment.tsx";
import {actions} from "../../../modules/redux/UserInfoReducer.ts";
import axios from "axios";

function confirmCookie(
  authenticated: (token: string) => void,
  unauthenticated: () => void,
) {
  const token = localStorage.getItem('with-authentication');
  if (token == null) {
    unauthenticated();
    return;
  }

  axios.post(
    '/api/auth/authorization',
    {},
    {headers: {'Authorization': `Bearer ${token}`}}
  ).then(result => {
    if (result.data['authorized'] == true) {
      authenticated(token);
    } else {
      unauthenticated();
    }
  }).catch(() => {
    unauthenticated();
  });
}

function Authenticated() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(state => state.userInfoReducer);

  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(userInfo.initialized) {
      if(userInfo.authenticated) {
        setAuthenticated(true);
      }
      else {
        navigate('/auth/signin');
      }
    }
    else {
      confirmCookie((token: string) => {
        axios.get('/api/user/get',
          {headers: {'Authorization': `Bearer ${token}`}}
        ).then(response => {
          dispatch(actions.signIn({
            username: response.data['user']['uname'],
            jwt: token,
            authenticated: true,
            initialized: true
          }));
          setAuthenticated(true);
        }).catch(() => {
          dispatch(actions.completeInitialization(false));
        });
      }, () => {
        dispatch(actions.completeInitialization(false));
      });
    }
  }, [navigate, authenticated, userInfo, dispatch]);

  if(authenticated) {
    return <Outlet />;
  }
  else {
    return (
      <VHCenter as={'main'} className={'h-screen'}>
        <p>Authenticating</p>
      </VHCenter>
    );
  }
}

export default Authenticated;
