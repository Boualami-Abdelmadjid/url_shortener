import React from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function CopyButton({domain}:{domain:string|undefined}) {
    const copyText = () => {
        domain && navigator.clipboard.writeText(domain);
      }
  return (
    <ContentCopyIcon fontSize='small' className='cursor-pointer text-md transition-all active:translate-y-1 text-primary' onClick={copyText} />
  )
}
