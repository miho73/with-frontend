import {Outlet, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../modules/hooks/ReduxHooks.ts";
import {useEffect, useState} from "react";
import {VHCenter} from "../../layouts/Alignment.tsx";
import {Spinner} from "react-bootstrap";
import {actions} from "../../../modules/redux/UserInfoReducer.ts";
import axios from "axios";

function confirmCookie(
  authenticated: () => void,
  unauthenticated: () => void
) {
  axios.get(
    '/api/auth/confirm-token',
    {withCredentials: true}
  ).then(result => {
    if(result.status === 200 && result.data.authenticated) {
      authenticated();
    }
    else {
      unauthenticated();
    }
  }).catch(error => {
    console.error(error);
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
      confirmCookie(() => {
        dispatch(actions.completeInitialization(true));
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
      <VHCenter>
        <Spinner animation={'grow'}/>
      </VHCenter>
    );
  }
}

export default Authenticated;
