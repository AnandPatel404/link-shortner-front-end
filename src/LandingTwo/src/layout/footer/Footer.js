import React from "react"

const Footer = (props) =>{
    return(
        <footer className={['footer', props.className ? props.className : null].join(' ')}>
            {props.children}
        </footer>
    )
}

export default Footer