import React from 'react'
import profile from '../assets/profile.jpg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.styles}  >
      <p id='user-id'>{props.name} </p>
      <img id='user-img' src={props.image} alt="faizan" />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
