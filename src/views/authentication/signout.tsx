import {VHCenter} from "../layouts/Alignment.tsx";
import {useDispatch} from "react-redux";
import {actions} from "../../modules/redux/UserInfoReducer.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Signout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('with-authentication');
    dispatch(actions.signOut());
    navigate('/');
  }, [dispatch, navigate]);

  return (
    <VHCenter>
      <div className={'text-2xl font-bold'}>Signing out...</div>
    </VHCenter>
  );
}

export default Signout;
