import React from "react"

const Review = (props) =>{
    return(
        <div className={['review', props.className ? props.className : null].join(' ')}>
            {props.children}
        </div>
    )
}

const ReviewContent = (props) =>{
    return(
         <div className={['review-content', props.className ? props.className : null].join(' ')}>
            {props.children}
        </div>
    )
}

const ReviewRating = (props) =>{
    return(
        <div className={['review-rating', props.className ? props.className : null].join(' ')}>
            {props.children}
        </div>
    )
}

const RatingText = (props) =>{
    return(
        <div className={['rating-text', props.className ? props.className : null].join(' ')}>{props.children}</div>
    )
}

const ReviewText = (props) =>{
    return(
        <div className={['review-text', props.className ? props.className : null].join(' ')}>
            {props.children}
        </div>
    )
}

const ReviewBrand = (props) =>{
    return(
        <div className={['review-brand', props.className ? props.className : null].join(' ')}>
            <img src={props.src} alt="brand-img" />
        </div>
    )
}



const ReviewPortrait = (props) => {
  return (
    <div className={["review-portrait review-portrait-s1", props.className ? props.className : null ].join(' ')}>
        {props.children}
    </div>
  )
}


export {Review, ReviewContent, ReviewRating, RatingText, ReviewText, ReviewBrand, ReviewPortrait }
