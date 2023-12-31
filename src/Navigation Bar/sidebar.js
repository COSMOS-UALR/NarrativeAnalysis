import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from "./sidebarData";
import { IconContext } from "react-icons";
import SubMenu from "./submenu";
import styled from "styled-components";

const NavBar=()=> {
    const [sidebar,setSidebar]= useState(false);
    const showSidebar =()=> setSidebar(!sidebar)
return(
 <>
 <IconContext.Provider value={{color:'white'}}>
    
     <div className="navbar">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
         </Link>
         <div className="maintitle">
        <h1>Narrative Analysis</h1>
        </div>
      </div>
      
     <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
        <ul className='nav-meny-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            </ul>
            <ul className='nav-meny-items'>
            {SidebarData.map((item,index) =>{
                return(
                    
                    /*<li key={index} className={item.cName}>
                        <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                        </Link>
                    </li>*/
                   
                    <SubMenu item={item} key={index} onClick={showSidebar} />
               
                )
            }
            
            
            )}
        
        </ul>

     </nav>
     </IconContext.Provider>
 </>
)

};
export default NavBar;
