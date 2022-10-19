import React from "react"
import { Card } from "reactstrap"

const PluginsInfo = (props) =>{
    return(
        <Card className={["card-full", props.className ? props.className : null].join(" ")}>
            <div className="card-inner">
                <div className="card-img mb-3">
                    <img className="h-60px" src={props.src} alt="bs" />
                </div>
                <div className="text-dark h6">{props.title}</div>
            </div>
        </Card>
    )
}

export default PluginsInfo
