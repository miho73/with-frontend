import {Stack, VHCenter} from "../layouts/Alignment.tsx";

interface ErrorPageProps {
  errorCode: string
  errorTitle: string,
  errorDescription: string,
  children?: React.ReactNode;
}

function ErrorPage(props: ErrorPageProps) {
  if(props.children) {
    return (
      <VHCenter as={'main'} className={'h-screen'} direction={'col'} gap={4}>
        <Stack direction={'col'} className={'items-center mb-7'} gap={5}>
          <p className={'text-8xl font-extralight'}>{props.errorCode}</p>
          <p className={'text-4xl font-light'}>{props.errorTitle}</p>
          <p className={'text-xl font-light'}>{props.errorDescription}</p>
        </Stack>
        {props.children}
      </VHCenter>
    )
  }

  return (
    <VHCenter as={'main'} className={'h-screen'} direction={'col'} gap={5}>
      <p className={'text-8xl font-extralight'}>{props.errorCode}</p>
      <p className={'text-4xl font-light'}>{props.errorTitle}</p>
      <p className={'text-xl font-light'}>{props.errorDescription}</p>
    </VHCenter>
  )
}

export default ErrorPage;
