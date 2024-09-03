import React from 'react';
import './Loading.css'

function Loading () {
  return (
    <div className='skeleton-wrapper'>
      <div className='skeleton-task' />
      <div className='skeleton-task' />
      <div className='skeleton-task' />
      <div className='skeleton-task' />
      <div className='skeleton-task' />
      <div className='skeleton-task' />
    </div>
  )
}

export { Loading }
