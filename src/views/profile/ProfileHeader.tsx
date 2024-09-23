import {Stack} from "../layouts/Alignment.tsx";
import {useAppSelector} from "../../modules/hooks/ReduxHooks.ts";
import {SettingsIcon} from "../../assets/svgs";
import {Link} from "react-router-dom";

function ProfileHeader() {
  const userInfo = useAppSelector(state => state.userInfoReducer);

  return (
    <Stack as={'div'} direction={'row'} className={'items-center justify-between'}>
      <p>사랑한지 11일째</p>
      <Link to={'/profile/settings'} className={'p-1'}>
        <SettingsIcon/>
      </Link>
    </Stack>
  )
}

export default ProfileHeader;
