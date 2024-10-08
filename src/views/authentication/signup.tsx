import {Stack} from "../layouts/Alignment.tsx";
import Divider from "../components/Divider.tsx";
import {Form} from "react-bootstrap";
import {Input} from "../components/forms/TextInput.tsx";
import {HorizontalForm} from "../components/forms/FormLayout.tsx";
import {Button, ButtonLink} from "../components/forms/Buttons.tsx";
import {useState} from "react";
import {
  checkFlag,
  checkSingle,
  lengthCheck,
  lengthCheckMin,
  regexCheck,
  valueOneOf,
  verifyAll
} from "../../modules/formValidator.ts";
import axios from "axios";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {useNavigate} from "react-router-dom";
import Alert from "../components/Alert.tsx";

function Signup() {
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [formStateFlag, setFormStateFlag] = useState<number>(0);
  const [working, setWorking] = useState<boolean>(false);

  const navigate = useNavigate();

  function onSexChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(e.target.checked) setSex(e.target.value);
  }

  function signup() {
    setWorking(true);

    verifyAll(
      checkIdDuplication,
      whenFormInvalid,

      lengthCheck(name, 1, 100, 0),
      valueOneOf(sex, ['M', 'F'], 1),
      regexCheck(email, /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, 2),
      lengthCheck(email, 5, 255, 2),
      lengthCheck(id, 1, 255, 3),
      lengthCheckMin(password, 6, 4),
    );
  }

  function checkIdDuplication() {
    setFormStateFlag(0);

    axios.get('/api/user/add/check-id', {
      params: {
        id: id
      }
    }).then(res => {
      if(res.data['result'] === 'available') {
        verifyRecaptcha()
          .then(completeSignup)
          .catch(() => whenFormInvalid(1 << 12));
      }
      else {
        const flg = checkSingle(0, false, 10);
        setFormStateFlag(flg);
        setWorking(false);
      }
    }).catch(() => {
      const flg = checkSingle(0, false, 11);
      setWorking(false);
      setFormStateFlag(flg);
    });
  }
  function whenFormInvalid(flag: number) {
    setFormStateFlag(flag);
    setWorking(false);
  }

  const {executeRecaptcha} = useGoogleReCaptcha();
  async function verifyRecaptcha() {
    if(!executeRecaptcha) {
      throw new Error('recaptcha not ready');
    }

    return await executeRecaptcha('signup');
  }

  function completeSignup(token: string) {
    axios.post('/api/user/add', {
      name: name,
      email: email,
      sex: sex,
      id: id,
      password: password,
      recaptcha: token
    }).then(() => {
      navigate('/auth/signin/password?error=signed_up');
    }).catch(() => {
      setFormStateFlag(1 << 13);
    }).finally(() => {
      setWorking(false);
    });
  }

  return (
    <Stack className={'h-screen justify-center items-center'}>
      <Stack gap={3} className={'items-start min-w-[400px] w-3/4 max-w-[600px]'}>
        <p className={'text-7xl titillium-web-regular-italic w-full text-center'}>WITH</p>

        <Divider/>

        <HorizontalForm label={'이름'} className={'w-full'}>
          <Input
            label={'이름'}
            value={name}
            set={setName}
            invalid={checkFlag(formStateFlag, 0)}
            invalidMessage={'이름은 100자 이내이어야 합니다.'}
            disabled={working}
          />
        </HorizontalForm>

        <HorizontalForm label={'성별'} className={'w-full'}>
          <Form.Check
            label={'남자'}
            type={'radio'}
            name={'sex'}
            id={'sex-male'}
            value={'M'}
            onChange={onSexChange}
            isInvalid={checkFlag(formStateFlag, 1)}
            disabled={working}
          />
          <Form.Check
            label={'여자'}
            type={'radio'}
            name={'sex'}
            value={'F'}
            id={'sex-female'}
            onChange={onSexChange}
            isInvalid={checkFlag(formStateFlag, 1)}
            disabled={working}
          />
        </HorizontalForm>

        <HorizontalForm label={'이메일'} className={'w-full'}>
          <Input
            label={'이메일'}
            type={'email'}
            value={email}
            set={setEmail}
            invalid={checkFlag(formStateFlag, 2)}
            invalidMessage={'올바른 이메일을 입력해주세요.'}
            disabled={working}
          />
        </HorizontalForm>

        <HorizontalForm label={'인증'} className={'w-full'}>
          <Input
            label={'아이디'}
            value={id}
            set={setId}
            validationFlags={[checkFlag(formStateFlag, 3), checkFlag(formStateFlag, 10), checkFlag(formStateFlag, 11)]}
            invalidMessages={['아이디는 255자 이하이어야 합니다.', '이미 사용중인 아이디입니다.', '아이디 중복 확인에 실패했습니다.']}
            disabled={working}
          />
          <Input
            type={'password'}
            label={'비밀번호'}
            value={password}
            set={setPassword}
            invalid={checkFlag(formStateFlag, 4)}
            invalidMessage={'비밀번호는 6자 이상이어야 합니다.'}
            disabled={working}
          />
        </HorizontalForm>

        { checkFlag(formStateFlag, 12) &&
          <Alert variant={'error'}>reCAPTCHA 확인에 실패했습니다.</Alert>
        }
        { checkFlag(formStateFlag, 13) &&
          <Alert variant={'error'}>회원가입하지 못했습니다.</Alert>
        }

        <Stack direction={'row'} className={'w-full justify-between'} gap={2}>
          <ButtonLink
            className={'w-1/2 bg-[#EAEAEA] hover:bg-[#E0E0E0] outline-neutral-500'}
            border={false}
            to={'/signin'}
          >
            기존 계정으로 로그인
          </ButtonLink>
          <Button
            className={'w-1/2 bg-[#EAEAEA] hover:bg-[#E0E0E0] outline-neutral-500'}
            border={false}
            onClick={signup}
          >
            회원가입
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Signup;
