import {ElementType} from "react";

/*
 * PREDEFINED TAILWIND GAPS
 * gap-0, gap-0.5, gap-1, gap-1.5, gap-2, gap-3, gap-4, gap-5, gap-6, gap-7, gap-8, gap-9, gap-10
 */
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
        'flex justify-center items-center gap-' +
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
        'flex justify-center items-center' +
        (props.className ? ' ' + props.className : '') +
        (props.gap ? ' gap-' + props.gap : '') +
        (props.direction === 'row' ? ' flex-row' : ' flex-col')
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
        'flex' +
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
        'flex' +
        (props.className ? ' ' + props.className : '') +
        (props.gap ? ' gap-' + props.gap : '') +
        (props.direction === 'row' ? ' flex-row' : ' flex-col')
      }>
        {props.children}
      </div>
    );
  }
}

interface GridProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  colsClass?: string;
  rowsClass?: string;
}

function Grid(props: GridProps) {
  if(props.as) {
    return (
      <props.as className={
        'grid' +
        (props.className ? ' ' + props.className : '') +
        (props.colsClass ? ' ' + props.colsClass : '') +
        (props.rowsClass ? ' ' + props.rowsClass : '')
      }>
        {props.children}
      </props.as>
    );
  }
  else {
    return (
      <div className={
        'grid' +
        (props.className ? ' ' + props.className : '') +
        (props.colsClass ? ' ' + props.colsClass : '') +
        (props.rowsClass ? ' ' + props.rowsClass : '')
      }>
        {props.children}
      </div>
    );
  }
}

export {
  VHCenter,
  Stack,
  Grid
};
