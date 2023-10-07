import React from 'react'

const Banner = (props) => {
  return (
    <div className='banner' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <h1>{props.title}</h1>
    </div>
  )
};

export default Banner