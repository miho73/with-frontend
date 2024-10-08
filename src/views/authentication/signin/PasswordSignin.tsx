import {Grid, Stack} from "../../layouts/Alignment.tsx";
import {useEffect, useState} from "react";
import Alert from "../../components/Alert.tsx";
import {Button, ButtonLink, Href} from "../../components/forms/Buttons.tsx";
import {FloatingInput} from "../../components/forms/TextInput.tsx";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {checkFlag, lengthCheck, lengthCheckMin, verifyAll} from "../../../modules/formValidator.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function PasswordSignInHost() {
  const [working, setWorking] = useState<boolean>(false);
  const [formStateFlag, setFormStateFlag] = useState<number>(0);

  const [id, setId] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');

  const [error, setError] = useState<string>();

  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const e = queryParams.get("error")
    if(e != null) setError(e);
  }, []);

  function startSignin() {
    setWorking(true);

    verifyAll(
      reCaptchaCheck,
      whenFormInvalid,

      lengthCheck(id, 1, 255, 0),
      lengthCheckMin(pwd, 6, 1),
    );
  }

  function reCaptchaCheck() {
    verifyRecaptcha()
      .then(completeSignin)
      .catch(() => whenFormInvalid(1 << 2));
  }
  function whenFormInvalid(flag: number) {
    setFormStateFlag(flag);
    setWorking(false);
  }

  function completeSignin(token: string) {
    axios.post('/api/auth/signin/password', {
      id: id,
      password: pwd,
      recaptcha: token
    }).then(res => {
      if(res.data['result'] === 'success') {
        const jwt = res.data['token'];
        navigate(`/auth/signin/complete?jwt=${jwt}`);
      } else {
        switch (res.data['message']) {
          case 'invalid-credentials':
            whenFormInvalid(1 << 4);
            break;
          default:
            whenFormInvalid(1 << 3);
        }
      }
    }).catch(() => {
      setFormStateFlag(1 << 3);
    }).finally(() => {
      setWorking(false);
    });
  }

  const {executeRecaptcha} = useGoogleReCaptcha();
  async function verifyRecaptcha() {
    if(!executeRecaptcha) {
      throw new Error('recaptcha not ready');
    }

    return await executeRecaptcha('signin_password');
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
          scale={'md'}
          value={id}
          set={setId}
          invalid={checkFlag(formStateFlag, 0)}
          disabled={working}
          onEnter={startSignin}
        />
        <FloatingInput
          controlId={'pwd'}
          label={'Password'}
          type={'password'}
          className={'w-3/4'}
          scale={'md'}
          value={pwd}
          set={setPwd}
          invalid={checkFlag(formStateFlag, 1)}
          disabled={working}
          onEnter={startSignin}
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
            onClick={startSignin}
            disabled={working}
          >
            로그인
          </Button>
        </Stack>

        <Href to={'/auth/iforgot'}>WITH 계정 찾기</Href>
        <Href to={'/auth/signup'}>회원가입</Href>

        {error === 'signed_up' && <Alert variant={'success-filled'}>회원가입되었습니다.</Alert>}
        { checkFlag(formStateFlag, 2) &&
          <Alert variant={'error'}>reCAPTCHA 확인에 실패했습니다.</Alert>
        }
        { checkFlag(formStateFlag, 3) &&
          <Alert variant={'error'}>로그인에 실패했습니다.</Alert>
        }
        { checkFlag(formStateFlag, 4) &&
          <Alert variant={'error'}>아이디 혹은 비밀번호가 일치하지 않습니다.</Alert>
        }
      </Stack>
    </Grid>
  )
}

export default PasswordSignInHost;
