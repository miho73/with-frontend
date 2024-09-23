import {Col, Form, FormGroup, Row} from "react-bootstrap";
import {Stack} from "../../layouts/Alignment.tsx";

interface HorizontalFormProps {
  label: string
  children?: React.ReactNode
  stackDirection?: 'row' | 'col'
  gap?: number
  className?: string
}

function HorizontalForm(props: HorizontalFormProps) {
  return (
    <FormGroup as={Row} className={props.className}>
      <Form.Label column sm={2}>{props.label}</Form.Label>
      <Col as={Stack} gap={props.gap ? props.gap : 2} sm={10} direction={props.stackDirection ? props.stackDirection : 'col'}>
        {props.children}
      </Col>
    </FormGroup>
  );
}

export {
  HorizontalForm
}
