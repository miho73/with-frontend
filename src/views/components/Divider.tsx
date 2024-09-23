import {Stack} from "../layouts/Alignment.tsx";

interface DividerProps {
  caption?: string
}

function Divider(props: DividerProps) {
  return (
    <Stack direction={'row'} gap={2} className={'items-center w-full'}>
      <div className={'w-full border-t border-[rgba(0,0,0,10%)]'}/>
      {props.caption &&
        <>
          <p className={'text-[rgba(0,0,0,50%)]'}>{props.caption}</p>
          <div className={'w-full border-t border-[rgba(0,0,0,10%)]'}/>
        </>
      }
    </Stack>
  )
}

export default Divider;
