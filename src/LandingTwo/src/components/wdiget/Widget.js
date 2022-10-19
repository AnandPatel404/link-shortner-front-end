import React from 'react'

const Widget = (props) =>{
  return (
    <div className={["widget", props.className ? props.className : null].join(' ')}>{props.children}</div>
  )
}
const WidgetTitle = (props) =>{
  return (
    <h6 className={["widget-title", props.className ? props.className : null].join(' ')}>{props.children}</h6>
  )
}

export { Widget, WidgetTitle }
