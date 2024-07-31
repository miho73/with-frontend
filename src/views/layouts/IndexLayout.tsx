import {Outlet} from "react-router-dom";
import { Header, Footer } from "../components/UICover.tsx";

function IndexLayout() {
  return (
    <div className={'grid grid-rows-[30px_auto_30px] h-screen'}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default IndexLayout;
