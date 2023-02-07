import React from 'react'

const Widgets = (props) => {
  return (
    <div>
        <div className=''>
            <div className="card w-100 shadow p-3 mb-5 bg-body rounded">
                <div className='fw-bold fs-8 ms-2 text-muted'>{props.data.title}</div>
                <div className="card-body px-5 text-start">
                <div className='d-flex gap-2 align-items-center'>
                <div className='text-muted fs-3 fw-bold'>{props.data.sign}</div>
                <div className='fw-bold fs-2'>{props.data.content}</div>
                <div className='fw-bold bg-success px-2 text-white rounded'>{props.data.badgeContent}</div>
                </div>
                <div className='text-muted mb-5'>{props.data.text}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Widgets