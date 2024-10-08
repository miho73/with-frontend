import {FloatingLabel, FormControl, FormGroup} from "react-bootstrap";
import Feedback from "react-bootstrap/Feedback";

interface TextInputProps {
  controlId?: string;
  label: string;
  className?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  scale?: 'sm' | 'md' | 'lg';

  value?: string;
  set?: (val: string) => void;
  onEnter?: () => void;

  invalid?: boolean;
  invalidMessage?: string;

  validationFlags?: boolean[];
  invalidMessages?: string[];

  disabled?: boolean;
}

function scalePreprocessor(scale: TextInputProps['scale']) {
  switch (scale) {
    case 'sm':
      return 'text-sm '
    case 'lg':
      return 'text-xl font-light '
    default:
      return 'text-base '
  }
}

function floatingScalePreprocessor(scale: TextInputProps['scale']) {
  switch (scale) {
    case 'sm':
      return 'max-w-[400px] min-w-[200px] '
    case 'lg':
      return 'max-w-[500px] min-w-[400px] '
    default:
      return 'max-w-[500px] min-w-[350px] '
  }
}

function FloatingInput(props: TextInputProps) {
  let isInvalid = false;
  let feedbackMessage;
  if(props.invalid) {
    isInvalid = true;

    feedbackMessage = (
      <Feedback type={'invalid'}>
        {props.invalidMessage}
      </Feedback>
    );
  }
  else if(props.validationFlags && props.invalidMessages) {
    for(let i = 0; i < props.validationFlags.length; i++) {
      if(props.validationFlags[i]) {
        isInvalid = true;
        feedbackMessage = (
          <Feedback type={'invalid'}>
            {props.invalidMessages[i]}
          </Feedback>
        );
        break;
      }
    }
  }

  function onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      props.onEnter ? props.onEnter() : null;
    }
  }

  return (
    <>
      <FloatingLabel
        controlId={props.controlId}
        label={props.label}
        className={
          floatingScalePreprocessor(props.scale) +
          (props.className ? props.className : '')
        }
      >
        <FormControl
          type={props.type}
          placeholder={props.label}
          size={props.scale === 'sm' ? 'sm' : 'lg'}
          className={
            scalePreprocessor(props.scale) +
            'w-full'
          }
          value={props.value}
          onChange={e => props.set ? props.set(e.target.value) : null}
          isInvalid={isInvalid}
          disabled={props.disabled}
          onKeyDown={onEnter}
        />
      </FloatingLabel>
      {feedbackMessage}
    </>
  )
}

function Input(props: TextInputProps) {
  let isInvalid = false;
  let feedbackMessage;
  if(props.invalid) {
    isInvalid = true;

    feedbackMessage = (
      <Feedback type={'invalid'}>
        {props.invalidMessage}
      </Feedback>
    );
  }
  else if(props.validationFlags && props.invalidMessages) {
    for(let i = 0; i < props.validationFlags.length; i++) {
      if(props.validationFlags[i]) {
        isInvalid = true;
        feedbackMessage = (
          <Feedback type={'invalid'}>
            {props.invalidMessages[i]}
          </Feedback>
        );
        break;
      }
    }
  }

  function onEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      props.onEnter ? props.onEnter() : null;
    }
  }

  return (
    <FormGroup>
      <FormControl
        type={props.type}
        placeholder={props.label}
        size={props.scale === 'sm' ? 'sm' : 'lg'}
        className={
          scalePreprocessor(props.scale) +
          floatingScalePreprocessor(props.scale) +
          (props.className ? props.className : '')
        }
        value={props.value}
        onChange={e => props.set ? props.set(e.target.value) : null}
        isInvalid={isInvalid}
        disabled={props.disabled}
        onKeyDown={onEnter}
      />
      {feedbackMessage}
    </FormGroup>
  )
}

export {
  FloatingInput,
  Input
}
