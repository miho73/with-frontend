import ErrorPage from "./ErrorPage.tsx";
import {useNavigate} from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <ErrorPage
      errorCode={'404'}
      errorTitle={'Not Found'}
      errorDescription={'The page you\'re looking for was not found.'}
    >
        <button
          className={'text-blue-600 text-lg hover:underline'}
          onClick={() => {navigate(-1)}}
        >
          &lt; Previous page
        </button>
    </ErrorPage>
  )
}

export default NotFound;
