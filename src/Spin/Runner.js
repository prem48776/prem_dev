import React from 'react'
import './runner.css'
import ClipLoader from 'react-spinners/ClipLoader'

const Runner = () => {
  return (
    <div className='spin'>
    <ClipLoader
        color='#36d7b7'
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Runner