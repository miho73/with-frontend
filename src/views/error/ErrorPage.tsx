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
      <VHCenter as={'main'} className={'h-screen'} direction={'col'} gap={2}>
        <Stack direction={'row'} gap={3}>
          <p className={'text-8xl font-extralight'}>{props.errorCode}</p>
          <div className={'border border-black h-[80px]'}/>
          <Stack direction={'col'}>
            <p className={'text-4xl font-light'}>{props.errorTitle}</p>
            <p className={'text-xl font-light'}>{props.errorDescription}</p>
          </Stack>
        </Stack>
        {props.children}
      </VHCenter>
    )
  }

  return (
    <VHCenter as={'main'} className={'h-screen'} direction={'row'} gap={3}>
      <p className={'text-8xl font-extralight'}>{props.errorCode}</p>
      <div className={'border border-black h-[80px]'}/>
      <Stack direction={'col'}>
        <p className={'text-4xl font-light'}>{props.errorTitle}</p>
        <p className={'text-xl font-light'}>{props.errorDescription}</p>
      </Stack>
    </VHCenter>
  )
}

export default ErrorPage;
