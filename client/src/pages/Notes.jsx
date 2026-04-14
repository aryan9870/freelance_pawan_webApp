import React from 'react'
import Navbar_v2 from '../components/Navbar_v2'
import { notesRectangle } from '../assets/assets'

const Notes = () => {
  return (
    <>
    <Navbar_v2 />
    <div className='mt-22 mx-20'>
      <div className='flex h-[40vh] border '>
        <div className='w-1/4'>
          <p>All Notes</p>
        </div>
        <div className='w-3/4'>
            <p>content</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Notes