import React from "react"

const OutlinedChecked = (props) =>{
    return(
        <ul className={['list', props.className ? props.className : null].join(' ')}>
            {props.data.map((data,index) =>
                    <li key={index}>{data}</li>
                )}
        </ul>
    )
}
const LinkList = (props) =>{
    return(
        <ul className={['link-list', props.className ? props.className : null].join(' ')}>
            {props.data.map((data,index) =>
                    <li key={index}><a href={data.to} onClick={(ev) => ev.preventDefault()}>{data.text}</a></li>
                )}
        </ul>
    )
}

const CheckedCircle = (props) =>{
    return(
        <ul className={['list', props.className ? props.className : null].join(' ')}>
            {props.data.map((data,index) =>
                    <li className="pl-5 pb-1" key={index}><strong>{data}</strong></li>
                )}
        </ul>
    )
}

const ListChecked = (props) =>{
    return(
        <ul className={['list', props.className ? props.className : null].join(' ')}>
            {props.data.map((data,index) =>
                    <li key={index}><strong>{data}</strong></li>
                )}
        </ul>
    )
}

const LinkInline = (props) =>{
    return(
        <ul className={["link-inline", props.className ? props.className : null].join(' ')}>
            {props.data.map((data,index) =>
                <li key={index}><a href={data.to} onClick={(ev) => ev.preventDefault()}>{data.text}</a></li>
            )}                          
        </ul>
    )
}

export { OutlinedChecked, LinkInline, CheckedCircle, ListChecked, LinkList }
