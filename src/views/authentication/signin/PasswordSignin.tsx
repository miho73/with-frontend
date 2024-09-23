import {Grid, Stack} from "../../layouts/Alignment.tsx";
import {useEffect, useState} from "react";
import Alert from "../../components/Alert.tsx";
import {Button, ButtonLink, Href} from "../../components/forms/Buttons.tsx";
import {FloatingInput} from "../../components/forms/TextInput.tsx";

function PasswordSignInHost() {
  const [error, setError] = useState<string>();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const e = queryParams.get("error")
    if(e != null) setError(e);
  }, []);

  function signin() {

  }

  return (
    <Grid rowsClass={'grid-rows-[40%_1fr_30%]'} className={'h-screen items-center'}>
      <p className={'text-7xl titillium-web-regular-italic text-center'}>WITH</p>

      <Stack gap={2} className={'items-center'}>
        <FloatingInput
          controlId={'id'}
          label={'ID'}
          type={'text'}
          className={'w-3/4'}
          scale={'lg'}
        />
        <FloatingInput
          controlId={'pwd'}
          label={'Password'}
          type={'password'}
          className={'w-3/4'}
          scale={'lg'}
        />

        <Stack direction={'row'} className={'w-3/4 max-w-[500px] min-w-[400px] justify-center mb-5'} gap={2}>
          <ButtonLink
            className={'w-1/2 bg-[#EAEAEA] hover:bg-[#E0E0E0] outline-neutral-500'}
            border={false}
            to={'/signin'}
          >
            다른 방법으로 로그인
          </ButtonLink>
          <Button
            className={'w-1/2 bg-[#EAEAEA] hover:bg-[#E0E0E0] outline-neutral-500'}
            border={false}
            onClick={signin}
          >
            로그인
          </Button>
        </Stack>

        <Href to={'/auth/iforgot'}>WITH 계정 찾기</Href>
        <Href to={'/auth/signup'}>회원가입</Href>

        {error === 'state_unset' && <Alert variant={'error'}>state가 설정되지 않았습니다.</Alert>}
        {error === 'state_mismatch' && <Alert variant={'error'}>state가 일치하지 않습니다.</Alert>}
        {error === 'code_unset' && <Alert variant={'error'}>OAuth 응답이 잘못되었습니다.</Alert>}
        {error === 'google_error' && <Alert variant={'error'}>Google로 로그인할 수 없습니다.</Alert>}
      </Stack>
    </Grid>
  )
}

export default PasswordSignInHost;
