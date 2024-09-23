import {FloatingLabel, FormControl} from "react-bootstrap";

interface TextInputProps {
  controlId?: string;
  label: string
  className?: string
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  scale?: 'sm' | 'md' | 'lg'
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
  return (
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
      />
    </FloatingLabel>
  )
}

function Input(props: TextInputProps) {
  return (
    <FormControl
      type={props.type}
      placeholder={props.label}
      size={props.scale === 'sm' ? 'sm' : 'lg'}
      className={
        scalePreprocessor(props.scale) +
        floatingScalePreprocessor(props.scale) +
        (props.className ? props.className : '')
      }
    />
  )
}

export {
  FloatingInput,
  Input
}
