import React from 'react'
import AuthButton from './AuthButton';

const Banner = (props) => {
  return (
    <div className="d-flex align-items-center">
        <h1 className="p-3">{ props.title }</h1>
        <AuthButton />
    </div>
  )
};

export default Banner