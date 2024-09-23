import {CompassIcon, MapIcon, ProfileIcon} from "../../assets/svgs";
import {ReactElement} from "react";
import {Link, useLocation} from "react-router-dom";

function Header() {
  return (
    <header className={'flex justify-center items-center'}>
      <Link to={'/'} className={'font-bold text-4xl dancing-script-700'}>WITH</Link>
    </header>
  );
}

function Footer() {
  const location = useLocation().pathname;

  return (
    <footer className={
      'grid grid-cols-3 '
    }>
      <FooterButton text={'피드'} icon={<MapIcon/>} to={'/feed'} location={location}/>
      <FooterButton text={'추천'} icon={<CompassIcon/>} to={'/featured'} location={location}/>
      <FooterButton text={'프로필'} icon={<ProfileIcon/>} to={'/profile'} location={location}/>
    </footer>
  );
}

interface FooterButtonTypes {
  text: string;
  icon: ReactElement;
  to: string;
  location: string;
}

function FooterButton(props: FooterButtonTypes) {
  return (
    <Link
      to={props.to}
      className={
        'flex flex-col gap-1 justify-center items-center' +
        (props.location.startsWith(props.to) ? ' current text-blue-500' : '')
      }
    >
      {props.icon}
      <p className={'font-bold'}>{props.text}</p>
    </Link>
  );
}

export {
  Header,
  Footer
};
