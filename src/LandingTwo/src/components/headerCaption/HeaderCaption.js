import React from "react" 

const HeaderCaption = (props) =>{
    return(
        <div className={['header-caption', props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}
const HeaderTitle = (props) =>{
    return(
        <h1 className={['header-title', props.className ? props.className : null].join(' ')}>{props.children}</h1>
    )
}
const HeaderText = (props) =>{
    return(
        <div className={['header-text', props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

const HeaderBadge = (props) =>{
    return(
        <div className={["header-badge", props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

export {HeaderCaption, HeaderTitle, HeaderText, HeaderBadge}
