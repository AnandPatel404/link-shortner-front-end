import React from 'react'

const User = (props) => {
  return (
    <div className={["user", props.className ? props.className : null].join(' ')}>
        <div className="img">
            <img className="img-circle sm" src={props.src} alt="img" />
        </div>
        <div className="info">
            <h6 className="name">{props.name}</h6>
            <div className="role">{props.role}</div>
        </div>
    </div>
  )
}

export default User
