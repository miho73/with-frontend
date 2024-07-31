import {Stack} from "../../layouts/Alignment.tsx";
import AuthButton from "./signInButton.tsx";
import Divider from "../../components/Divider.tsx";
import {Link} from "react-router-dom";

function signInHost() {
  return (
    <Stack className={
      'p-4 rounded-xl ' +
      'shadow'
    } gap={3}>
      <p className={'text-2xl fw-normal text-center'}><span className={'dancing-script-400 px-1'}>WITH</span>에 로그인</p>

      <Stack gap={2}>
        <AuthButton
          provider={'google'}
          label={'Google로 로그인'}
          onClick={() => {}}
        />

        <AuthButton
          provider={'kakao'}
          label={'카카오 로그인'}
          onClick={() => {}}
        />

        <AuthButton
          provider={'passkey'}
          label={'Passkey로 로그인'}
          onClick={() => {}}
        />

        <Divider caption={'or'}/>

        <Stack direction={'row'} className={'justify-between'}>
          <Link to={'/auth/iforgot'} className={'text-neutral-500 text-base'}>로그인할 수 없습니다.</Link>
          <Link to={'/auth/signup'} className={'text-neutral-500 text-base'}>회원가입</Link>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default signInHost;
