import React from 'react'

export default function RightSide() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-6 text-textGreen'>
       <a href="mailto:happyraj9939@gmail.com" className='w-fit'>
        <p className='text-sm font-body rotate-90 w-72 tracking-wide text-textGreen'>happyraj9939@gmail.com</p>
       </a>
      <span className='mt-2 w-[2px] h-24 bg-textDark inline-flex'></span>
    </div>
  )
}
