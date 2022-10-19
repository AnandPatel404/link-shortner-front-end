import React from "react"
import { NioIcon } from "../icon/Icon"

const Rating = (props) =>{
    return(

        <ul className={["rating-stars", props.className ? props.className : null].join(' ')}>
                {props.data.map((data,index) =>
                    <li key={index}><NioIcon icon={data.icon}/></li>
                )}
        </ul>
    )
}

export default Rating