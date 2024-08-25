import {Stack} from "../../layouts/Alignment.tsx";
import AuthButton from "./SignInButton.tsx";
import Divider from "../../components/Divider.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Alert} from "react-bootstrap";

function SignInHost() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();

  function signIn(provider: 'google' | 'kakao' | 'password') {
    switch (provider) {
      case "google":
        window.location.href = '/api/auth/signin/google';
        break;
      case "kakao":
        window.location.href = '/api/auth/signin/kakao';
        break;

      case "password":
        navigate('/auth/signin/password');
        break;
    }
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const e = queryParams.get("error")
    if(e != null) setError(e);
  }, []);

  return (
    <Stack className={
      'p-4 rounded-xl ' +
      'shadow'
    } gap={3}>
      <p className={'text-2xl fw-normal text-center'}><span className={'dancing-script-400 px-1'}>WITH</span>에 로그인</p>

      {error === 'state_unset' && <Alert variant={'danger'}>state가 설정되지 않았습니다.</Alert>}
      {error === 'state_mismatch' && <Alert variant={'danger'}>state가 불일치합니다.</Alert>}
      {error === 'code_unset' && <Alert variant={'danger'}>OAuth 응답이 잘못되었습니다.</Alert>}
      {error === 'google_error' && <Alert variant={'danger'}>Google로 로그인할 수 없습니다.</Alert>}

      <Stack gap={2}>
        <AuthButton
          provider={'google'}
          label={'Google로 로그인'}
          onClick={() => signIn('google')}
        />

        <AuthButton
          provider={'kakao'}
          label={'카카오 로그인'}
          onClick={() => signIn('kakao')}
        />

        <AuthButton
          provider={'password'}
          label={'비밀번호로 로그인'}
          onClick={() => signIn('password')}
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

export default SignInHost;
