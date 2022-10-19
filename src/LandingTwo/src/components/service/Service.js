import React from "react"

const Service = (props) =>{
    return(
        <div className={['service', props.className ? props.className : null].join(' ')}>
            {props.children}
        </div>
    )
}

const ServiceIcon = (props) =>{
    return(
        <div className={['service-icon', props.className ? props.className : null].join(' ')}>
                {props.children}
        </div>
            
    )
}

const ServiceText = (props) =>{
    return(
        <div className={['service-text', props.className ? props.className : null].join(' ')}>
            {props.children}
        </div>
    )
}


export {Service, ServiceIcon, ServiceText}