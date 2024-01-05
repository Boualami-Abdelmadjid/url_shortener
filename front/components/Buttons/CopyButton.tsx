import React from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { copyText } from '@/hooks/tools';

export default function CopyButton({domain}:{domain:string}) {
  
  return (
    <ContentCopyIcon fontSize='small' className='cursor-pointer text-md transition-all active:translate-y-1 text-primary' onClick={()=> copyText(domain)} />
  )
}
