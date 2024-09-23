import {GoogleIcon, KakaoIcon, KeyIcon, PasskeyIocnWhite} from "../../../assets/svgs";

interface AuthButtonProps {
  provider: keyof typeof PROVIDERS;
  label: string;
  onClick: () => void;
}

const PROVIDERS = {
  kakao: {
    bg: 'bg-[#ffe500] ',
    color: 'text-[rgba(0,0,0,85%)] ',
    icon: <KakaoIcon width={32} height={32} className={'absolute left-[15px] top-[6px]'}/>,
    perAppClass: ''
  },
  google: {
    bg: 'bg-#FFFFFF ',
    color: 'text-#000 ',
    icon: <GoogleIcon width={40} height={40} className={'absolute left-[15px] top-[2px]'}/>,
    perAppClass: 'border '
  },
  passkey: {
    bg: 'bg-[#6c757d] ',
    color: 'text-white ',
    icon: <PasskeyIocnWhite width={36} height={36} className={'absolute left-[15px] top-[4px]'}/>,
    perAppClass: ''
  },
  password: {
    bg: 'bg-[#fff] ',
    color: 'text-#000 ',
    icon: <KeyIcon width={30} height={30} className={'absolute left-[15px] top-[7px] transform-gpu scale-x-[-1]'}/>,
    perAppClass: 'border '
  }
}

function AuthButton(props: AuthButtonProps) {
  const provider = PROVIDERS[props.provider];

  return (
    <button
      className={
        'rounded w-3/4 h-[44px] relative max-w-sm ' +
        provider.color +
        provider.perAppClass +
        provider.bg
      }
      onClick={props.onClick}
    >
      {provider.icon}
      {props.label}
    </button>
  )
}

export default AuthButton;
