import React from 'react'

const Ovm = (props) =>{
    return(
        <div className={['nk-ovm', props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

const BgImage = (props) =>{
    return(
        <div className={["bg-image", props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

export { Ovm, BgImage }
