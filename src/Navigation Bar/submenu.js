import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink= styled(Link)`
display :flex;
color :white;
justify-content:space-between;
align-items: center;
padding: 20px;
list-style:none;
height:60px;
text-decoration:none;
font-size:25px;

&:hover{
    background:#D3D3D3;
    boarder-left: 4px solid #632ce4;
    cursor:pointer;
}
`;

const SidebarLabel=styled.span`
margin-left:16px;
`;

const DropdownLink=styled(Link)`
 background: #2F2D2C;
 height:80px;
 padding-left:20px;
 display:flex;
 align-items:center;
 text-decoration:none;
 color:#f5f5f5;
 font-size:20px;

 &:hover{
    background:#D3D3D3;
    cursor:pointer;
 }
 `;

const SubMenu = ({item}) => {
    const [subnav,setSubnav]= useState(false)
    const showSubnav=()=> setSubnav(!subnav)

  return (
    <>
    <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
            {item.subNav && subnav ? item.iconOpened:item.subNav?item.iconClosed:null}
            
        </div>
    </SidebarLink>
    {subnav && item.subNav.map((item,index)=>{
        return(
            <DropdownLink to={item.path} key={index}>
                <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
        )

    })}
    
    
    </>
  )
}

export default SubMenu;