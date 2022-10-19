import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Scroll from "react-scroll";

const ScrollLink = Scroll.Link;


const Menu = ({data, ...props}) =>{
    return (
        <ul className={['menu-list', props.className ? props.className : null].join(' ')}>
            {data.map((data,index) =>
                <MenuItem key={index} to={data.to} text={data.text} submenu={data.subMenu}>
                </MenuItem> 
            )}
        </ul>
    )
}

const MenuItem = ({data, ...props}) =>{
    const [active , setActive] = useState(false);
    return (
        <li className={['menu-item', props.submenu ? 'has-sub' : null, active ? "active" : ""].join(' ')} onClick={() => props.submenu ? setActive(!active) : null }>
            <MenuLink to={props.to} submenu={props.submenu}>{props.text}</MenuLink>
            {props.submenu && <MenuSub submenu={props.submenu} active={active}/>}
        </li>
    )
}

const MenuLink = ({data, ...props}) => {
    if (props.to.split("")[0] === "#"){
        return (
        <ScrollLink
            to={props.to}
            href="#"
            spy={true} 
            smooth={true}  
            className="menu-link">
                {props.children}
        </ScrollLink>
        )
    }
    else {
        if (props.submenu){
            return (
                <a href="toggle" onClick={(ev) => ev.preventDefault()} className="menu-link">
                    {props.children}
                </a>
            )
        } else {
            return (
                <Link to={process.env.PUBLIC_URL + props.to} className="menu-link">{props.children}</Link>
            )
        }
    }
}

const MenuSub = ({data, ...props}) => {
    return (
        <div className="menu-sub" style={{display : props.active ? "block" : "none"}}>
            <ul className="menu-list">
                {props.submenu.map((data, index) =>
                    <MenuItem key={index} to={data.to} text={data.text} submenu={data.subMenu}></MenuItem>
                )}
            </ul>
        </div>
    )
}


export default Menu
