import {Stack} from "../layouts/Alignment.tsx";
import Divider from "../components/Divider.tsx";
import {Col, Form, FormGroup, Row} from "react-bootstrap";
import {Input} from "../components/forms/TextInput.tsx";
import {HorizontalForm} from "../components/forms/FormLayout.tsx";
import {Button, ButtonLink} from "../components/forms/Buttons.tsx";

function Signup() {
  function signup() {

  }

  return (
    <Stack className={'h-screen justify-center items-center'}>
      <Stack gap={3} className={'items-start min-w-[400px] w-3/4 max-w-[600px]'}>
        <p className={'text-7xl titillium-web-regular-italic w-full text-center'}>WITH</p>

        <Divider/>

        <HorizontalForm label={'이름'} className={'w-full'}>
          <Input label={'이름'}/>
        </HorizontalForm>

        <HorizontalForm label={'성별'} className={'w-full'}>
          <Form.Check
            label={'남자'}
            type={'radio'}
            name={'sex'}
            id={'sex-male'}
          />
          <Form.Check
            label={'여자'}
            type={'radio'}
            name={'sex'}
            id={'sex-female'}
          />
        </HorizontalForm>

        <HorizontalForm label={'이메일'} className={'w-full'}>
          <Input label={'이메일'} type={'email'}/>
        </HorizontalForm>

        <HorizontalForm label={'인증'} className={'w-full'}>
          <Input type={'password'} label={'아이디'}/>
          <Input type={'password'} label={'비밀번호'}/>
        </HorizontalForm>

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
  )
}

export default Signup;
