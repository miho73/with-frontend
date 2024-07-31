import '../styles/univ.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorPage from "./error/ErrorPage.tsx";
import SignIn from "./authentication/signin/signInHost.tsx";
import AuthenticationHost from "./authentication/AuthenticationHost.tsx";
import IndexLayout from "./layouts/IndexLayout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/auth'} element={<AuthenticationHost />}>
          <Route path={'signin'} element={<SignIn />}/>
        </Route>

        <Route path={'/'} element={<IndexLayout />}>

        </Route>

        <Route path={'*'} element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
