import {Grid, Stack} from "../../layouts/Alignment.tsx";
import AuthButton from "./SignInButton.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Alert from "../../components/Alert.tsx";

function SignInHost() {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();

  function signIn(provider: 'google' | 'kakao' | 'passkey' | 'password') {
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
    <Grid rowsClass={'grid-rows-[40%_1fr_30%]'} className={'h-screen items-center'}>
      <p className={'text-7xl titillium-web-regular-italic text-center'}>WITH</p>

      <Stack gap={3} className={'items-center'}>
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
          provider={'passkey'}
          label={'Passkey로 로그인'}
          onClick={() => signIn('passkey')}
        />

        <AuthButton
          provider={'password'}
          label={'비밀번호로 로그인'}
          onClick={() => signIn('password')}
        />

        {error === 'state_unset' && <Alert variant={'error'}>state가 설정되지 않았습니다.</Alert>}
        {error === 'state_mismatch' && <Alert variant={'error'}>state가 일치하지 않습니다.</Alert>}
        {error === 'code_unset' && <Alert variant={'error'}>OAuth 응답이 잘못되었습니다.</Alert>}
        {error === 'google_error' && <Alert variant={'error'}>Google로 로그인할 수 없습니다.</Alert>}
      </Stack>
    </Grid>
  )
}

export default SignInHost;
