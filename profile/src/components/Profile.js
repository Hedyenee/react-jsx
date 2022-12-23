import React from 'react'
import './Profile.css'
import Address from './Address'
import FullName from './FullName'
import Photo from './Photo'

const Profile = () => {
  return (
    <div className='profile'>
        <Photo />
        <FullName />
        <Address />
    </div>
  )
}

export default Profile