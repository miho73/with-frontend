import {ElementType} from "react";

interface AlignmentLayoutProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  gap?: number;
  direction?: 'row' | 'col';
}

function VHCenter(props: AlignmentLayoutProps) {
  if(props.as) {
    return (
      <props.as className={
        'flex justify-center items-center' +
        (props.className ? ' ' + props.className : '')
      }>
        {props.children}
      </props.as>
    );
  }
  else {
    return (
      <div className={
        'flex justify-center items-center' +
        (props.className ? ' ' + props.className : '')
      }>
        {props.children}
      </div>
    );
  }
}

function Stack(props: AlignmentLayoutProps) {
  if(props.as) {
    return (
      <props.as className={
        'flex flex-col' +
        (props.className ? ' ' + props.className : '') +
        (props.gap ? ' gap-' + props.gap : '') +
        (props.direction === 'row' ? ' flex-row' : ' flex-col')
      }>
        {props.children}
      </props.as>
    );
  }
  else {
    return (
      <div className={
        'flex flex-col' +
        (props.className ? ' ' + props.className : '') +
        (props.gap ? ' gap-' + props.gap : '') +
        (props.direction === 'row' ? ' flex-row' : ' flex-col')
      }>
        {props.children}
      </div>
    );
  }
}

export {
  VHCenter,
  Stack
};
