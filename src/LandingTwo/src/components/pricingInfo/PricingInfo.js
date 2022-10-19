import React from "react"
import { Card } from "reactstrap"

const Pricing = (props) =>{
    return(
        <Card className={["pricing", props.className ? props.className : null].join(' ')}>
            {props.children}
        </Card>
    )
}

const PricingAmont = (props) =>{
    return(
        <h2 className={["pricing-amount", props.className ? props.className : null].join(' ')}>{props.children}</h2>
    )
}

const PricingTitle = (props) =>{
    return(
        <h5 className={["pricing-title", props.className ? props.className : null].join(' ')}>{props.children}</h5>
    )
}

const PricingSubTitle = (props) =>{
    return(
        <span className={["sub-title", props.className ? props.className : null].join(' ')}>{props.children}</span>
    )
}

const PricingAction = (props) =>{
    return(
        <div className={["pricing-action", props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

const PricingBadge = (props) =>{
    return(
        <div className={["pricing-badge", props.className ? props.className : null].join(' ')}>{props.text}</div>
    )
}


export {Pricing, PricingAmont, PricingTitle, PricingSubTitle, PricingAction, PricingBadge}
