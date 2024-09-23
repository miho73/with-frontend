interface AlertProps {
  variant: 'success' | 'error' | 'warning' | 'info' | 'default' | 'success-filled' | 'error-filled' | 'warning-filled' | 'info-filled';
  children: React.ReactNode;
  className?: string;
}

const COLOR_LOOKUP = {
  'success': 'text-green-500',
  'error': 'text-red-500',
  'warning': 'text-yellow-500',
  'info': 'text-blue-500',
  'default': 'bg-gray-100 text-gray-800',
  'success-filled': 'bg-green-100 text-white',
  'error-filled': 'bg-red-100 text-white',
  'warning-filled': 'bg-yellow-100 text-white',
  'info-filled': 'bg-blue-100 text-white'
}

function Alert(props: AlertProps) {
  return (
    <p className={
      'px-6 py-4 rounded-lg font-medium text-base ' +
      COLOR_LOOKUP[props.variant] +
      (props.className ? ' ' + props.className : '')
    }>
      {props.children}
    </p>
  )
}

export default Alert;
