import React from "react"

const Section = (props) =>{
    return(
        <section className={['section', props.className ? props.className : null].join(' ')} id={props.id}>{props.children}</section>
    )
}

const SectionHead = (props) =>{
    return(
        <div className={['section-head', props.className ? props.className : null].join(' ')}>
            {props.children}
        </div>
    )
}

const SectionContant = (props) =>{
    return(
        <div className={['section-content', props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

export {Section, SectionHead, SectionContant}
