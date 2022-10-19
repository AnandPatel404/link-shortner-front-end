import React from 'react'

const Button = (props) =>{
    return (
        <button href={props.to} target={props.target} rel={props.rel}  className={['btn', props.className ? props.className : null].join(' ')}>{props.children}</button>
    )
}


const Link = (props) =>{
    return(
        <a href={props.to} target={props.target} rel={props.rel}  className={['btn', props.className ? props.className : null].join(' ')}>{props.children}</a>
    )
}

export {Button, Link}

