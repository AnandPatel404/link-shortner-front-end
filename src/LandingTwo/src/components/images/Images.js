import React from "react" 

const HeaderImage = (props) =>{
    return(
        <div className={['header-image', props.className ? props.className : null].join(' ')}>
            {props.children}
        </div>
    );
};

const ImageBlock = (props) =>{
    return(
        <div className={['img-block', props.className ? props.className : null].join(' ')}>
            {props.children}
        </div>
    )
}

const Portrait = (props) =>{
    return(
        <div className={["portrait", props.className ? props.className : null].join(' ')}>
            {props.children}
        </div>        
    )
}


export {HeaderImage, ImageBlock, Portrait}
