import {VHCenter} from "../layouts/Alignment.tsx";

function ErrorPage() {
  return (
    <VHCenter as={'main'} className={'h-screen'}>
      <p className={'text-3xl font-light'}>404</p>
      <p>Page not found</p>
    </VHCenter>
  )
}

export default ErrorPage;
