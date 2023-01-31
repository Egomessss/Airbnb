import React from 'react'

function Info(props:any) {
  return (
    <div className='border-t-[1px] pt-8 pb-6'>
        {props.children}
    </div>
  )
}

export default Info