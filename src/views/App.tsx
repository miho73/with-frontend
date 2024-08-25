import '../styles/univ.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from "./authentication/signin/SignInHost.tsx";
import AuthenticationHost from "./authentication/AuthenticationHost.tsx";
import IndexLayout from "./layouts/IndexLayout.tsx";
import Authenticated from "./components/frames/AuthenticationFrame.tsx";
import SetJwt from "./authentication/signin/SetJwt.tsx";
import NotFound from "./error/NotFound.tsx";
import Signout from "./authentication/signout.tsx";
import ProfileHost from "./profile/ProfileHost.tsx";

function App() {
  const dev:boolean = import.meta.env.DEV;

  return (
    <BrowserRouter>
      {dev && <div className={'fixed bottom-0 right-0 px-3 py-2 bg-red-500 text-white'}>DEV</div>}
      <Routes>
        <Route path={'/auth'} element={<AuthenticationHost />}>
          <Route path={'signin'} element={<SignIn />}/>
          <Route path={'signin/complete'} element={<SetJwt />}/>
          <Route path={'signout'} element={<Signout />}/>
          <Route path={'*'} element={<NotFound />}/>
        </Route>

        <Route element={<Authenticated />}>
          <Route path={'/'} element={<IndexLayout />}>
            <Route path={'/'} element={<div>Index</div>}/>
            <Route path={'profile'} element={<ProfileHost />}/>
            <Route path={'*'} element={<NotFound />}/>
          </Route>
        </Route>

        <Route path={'*'} element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
