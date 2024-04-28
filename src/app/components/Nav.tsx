'use client'
import React,{useState,useEffect} from 'react'
import './nav.css'
import { navs } from "../data/data";

export default function Nav() {
    const [navList ,setNavList] = useState(navs);
  return (
    <nav id='navBar' className='navbar nav-menu'>  
      <ul>
        {
          navList.map(nav=>( 
            <li key={nav.id}>
            <a className={`nav-link scrollto ${nav.active? 'active' : undefined}`}>
              <i className={nav.icon}><span>{nav.name}</span>
                </i></a></li>))}
      </ul>
    </nav>
    )
}
