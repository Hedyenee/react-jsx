import React from 'react'
import logo from '../assets/photo.png'
import './Photo.css'

const Photo = () => {
  return (
    <>
        <img src={logo} className="photo" alt="photo" />
    </>
  )
}

export default Photo