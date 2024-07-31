import { Outlet } from 'react-router-dom';
import { VHCenter } from "../layouts/Alignment.tsx";

function AuthenticationHost() {
  return (
    <VHCenter className={'h-screen'} as={'main'}>
      <Outlet/>
    </VHCenter>
  );
}

export default AuthenticationHost;
