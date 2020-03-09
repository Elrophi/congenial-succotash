import React from "react";
import {NavLink} from 'react-router-dom'
import '../../../styles/index.css';

function NavigationLink(props) {
  return(
    <li>
      <NavLink to={props.location} className={props.navStyle}>
        {props.children}
      </NavLink> 
    </li>
  );
}

export default NavigationLink;
