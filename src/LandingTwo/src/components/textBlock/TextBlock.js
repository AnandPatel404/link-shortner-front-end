import React from 'react'

const TextBlock = (props) =>{
    return(
        <div  className={['text-block', props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

const TitleH2 = (props) => {
    return (
        <h2 className={['title', props.className ? props.className : null].join(' ')}>{props.children}</h2>
    )
}
const TitleH3 =(props) =>{
    return (
        <h3 className={['title', props.className ? props.className : null].join(' ')}>{props.children}</h3>
    )
}


const Paragraph = (props) =>{
    return (
        <p className={['', props.className ? props.className : null].join(' ')}>{props.children}</p>
    )
}

export {TextBlock, TitleH2, TitleH3, Paragraph}
