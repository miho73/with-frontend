import {Link} from "react-router-dom";

interface ButtonProps {
  scale?: 'small' | 'medium' | 'large';
  border?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  to?: string;
}

function Button(props: ButtonProps) {
  return (
    <button className={
        'text-center ' +
        'transition-colors '+
        (props.border || props.border === undefined ? 'border ' : '') +
        (props.scale === 'small' ? 'px-4 py-2 max-w-[200px] text-sm rounded' : '') +
        (props.scale !== 'small' && props.scale !== 'large' ? 'px-4 py-2 text-base min-w-[150px] max-w-[250px] rounded' : '') +
        (props.scale === 'large' ? 'px-6 py-3 text-lg font-light min-w-[300px] max-w-[500px] rounded-lg' : '') +
        (props.className ? ' ' + props.className : '')
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

function ButtonLink(props: ButtonProps) {
  return (
    <Link className={
        'text-center block ' +
        'transition-colors '+
        (props.border || props.border === undefined ? 'border ' : '') +
        (props.scale === 'small' ? 'px-4 py-2 max-w-[200px] text-sm rounded' : '') +
        (props.scale !== 'small' && props.scale !== 'large' ? 'px-4 py-2 text-base min-w-[150px] max-w-[250px] rounded' : '') +
        (props.scale === 'large' ? 'px-6 py-3 text-lg font-light min-w-[300px] max-w-[500px] rounded-lg' : '') +
        (props.className ? ' ' + props.className : '')
      }
      to={props.to ? props.to : '.'}
    >
      {props.children}
    </Link>
  )
}

interface LinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}
function Href(props: LinkProps) {
  return (
    <Link
      to={props.to}
      className={
        'text-center block text-blue-500 hover:underline' +
        (props.className ? ' ' + props.className : '')
      }
    >
      {props.children}
    </Link>
  )
}

export {
  Button,
  ButtonLink,
  Href
}
