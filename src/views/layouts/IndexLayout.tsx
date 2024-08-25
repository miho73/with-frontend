import {Outlet} from "react-router-dom";
import { Header, Footer } from "../components/UICover.tsx";

function IndexLayout() {
  return (
    <div className={'grid grid-rows-[60px_auto_70px] h-screen'}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default IndexLayout;
