import React from 'react'


const ProductInfo = (props) =>{
    return(
        <div className={["product-info", props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

const ProductDesc = (props) =>{
    return(
        <div className={["product-desc", props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

const ProductPrice = (props) =>{
    return(
        <div className={["product-price", props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

const ProductImage = (props) =>{
    return(
        <div className={["product-img", props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}



export { ProductInfo, ProductDesc, ProductPrice, ProductImage }
