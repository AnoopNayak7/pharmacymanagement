import InputBox from '@/@core/components/InputBox'
import React from 'react'

const index = () => {
  return (
    <div className='container'>
        <InputBox type={'text'} placeholder='Search (ctrl+v)' value={''} onChange={() => {}} />
    </div>
  )
}

export default index