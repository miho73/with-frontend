interface AlertProps {
  variant: 'success' | 'error' | 'warning' | 'info' | 'default' | 'success-filled' | 'error-filled' | 'warning-filled' | 'info-filled' | 'default-filled';
  children: React.ReactNode;
  className?: string;
}

const COLOR_LOOKUP = {
  'success': 'text-green-600',
  'error': 'text-red-600',
  'warning': 'text-orange-600',
  'info': 'text-blue-600',
  'default': 'text-gray-800',
  'success-filled': 'bg-green-200 text-green-800 border-green-400 border-1',
  'error-filled': 'bg-red-200 text-red-800 border-red-400 border-1',
  'warning-filled': 'bg-orange-200 text-orange-800 border-orange-400 border-1',
  'info-filled': 'bg-blue-200 text-blue-800 border-blue-400 border-1',
  'default-filled': 'bg-gray-200 text-gray-800 border-gray-400 border-1',
}

function Alert(props: AlertProps) {
  return (
    <p className={
      'px-4 py-3 my-2 rounded-xl font-medium text-lg ' +
      COLOR_LOOKUP[props.variant] +
      (props.className ? ' ' + props.className : '')
    }>
      {props.children}
    </p>
  )
}

export default Alert;
