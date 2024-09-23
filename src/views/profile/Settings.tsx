import {Stack} from "../layouts/Alignment.tsx";
import {Link} from "react-router-dom";

interface SettingButtonProps {
  text: string;
  type: 'button' | 'link';
  to?: string;
  onClick?: () => void;
  target?: string;
}

interface SettingControlProps {
  text: string;
  control: React.ReactNode;
}

function SettingButton(props: SettingButtonProps) {
  if(props.type === 'button') {
    return (
      <button className={'flex flex-row justify-between'}>
        {props.text}
        <span>&gt;</span>
      </button>
    );
  }

  else if(props.type === 'link') {
    return (
      <Link
        to={props.to ? props.to : '.'}
        className={'flex flex-row justify-between'}
        target={props.target ? props.target : '_self'}
      >
        {props.text}
        <span>&gt;</span>
      </Link>
    )
  }
}

function SettingControl(props: SettingControlProps) {
  return (
    <div className={'flex flex-row justify-between'}>
      <p>{props.text}</p>
      {props.control}
    </div>
  )
}

function Settings() {
  return (
    <Stack gap={3} className={'text'}>
      <Link to={'/profile'}>&lt; 돌아가기</Link>
      <Stack gap={2}>
        <p className={'font-bold'}>커플 연결</p>
        <SettingButton type={'button'} text={'커플 맺기'}/>
      </Stack>
      <Stack gap={2}>
        <p className={'font-bold'}>계정</p>
        <SettingButton type={'link'} text={'인증 관리'}/>
        <SettingButton type={'link'} text={'로그아웃'} to={'/auth/signout'}/>
        <SettingButton type={'link'} text={'탈퇴하기'}/>
      </Stack>
      <Stack gap={2}>
        <p className={'font-bold'}>앱 정보</p>
        <SettingControl text={'프론트엔드 버전'} control={<p>{import.meta.env.VITE_FRONTEND_VERSION}</p>}/>
        <SettingButton text={'GitHub'} type={'link'} to={'https://github.com/miho73/with-frontend'} target={'_blank'}/>
      </Stack>
    </Stack>
  );
}

export default Settings;
