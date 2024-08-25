import {GoogleIcon, KakaoIcon, PasskeyIocnWhite} from "../../../assets/svgs";

interface AuthButtonProps {
  provider: keyof typeof PROVIDERS;
  label: string;
  onClick: () => void;
}

const PROVIDERS = {
  kakao: {
    bg: 'bg-[#ffe500] ',
    color: 'text-[rgba(0,0,0,85%)] ',
    icon: <KakaoIcon width={25} height={25} className={'absolute left-[25px]'}/>,
    perAppClass: ''
  },
  google: {
    bg: 'bg-#FFFFFF ',
    color: 'text-#000 ',
    icon: <GoogleIcon width={25} height={25} className={'absolute left-[25px]'}/>,
    perAppClass: 'border '
  },
  password: {
    bg: 'bg-[#6c757d] ',
    color: 'text-white ',
    icon: <PasskeyIocnWhite width={25} height={25} className={'absolute left-[25px]'}/>,
    perAppClass: ''
  }
}

function AuthButton(props: AuthButtonProps) {
  const provider = PROVIDERS[props.provider];

  return (
    <button
      className={
        'rounded px-4 py-2.5 w-[250px] relative ' +
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
