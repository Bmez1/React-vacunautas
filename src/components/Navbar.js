import React, {useState} from "react";
import { Link} from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from "./NavbarElements";
import  {FaBars, FaTimes, FaHome, FaUserAlt, FaBriefcase, FaChild,} from "react-icons/fa";
import {IconContext} from 'react-icons'

function Navbar(){
    const[showMobileMenu, setshowMobileMenu]= useState(false)

    return(

<Container>
    <Wrapper>
        <IconContext.Provider value={{style:{fontSize:"1.5em"}}}>
        <Link to="/home" className="navbar-brand" text-decoration="none">
        <LogoContainer to="/home" className="navbar-brand text-white" >
        
        
<img height="60"  src={logo} alt="Logo Vacunautas"/>&nbsp;&nbsp;
    <strong>Vacunautas</strong>
       
        </LogoContainer>
        </Link>
       
        <MobileIcon onClick= {()=>setshowMobileMenu(!showMobileMenu)}>
        <strong>Menú&nbsp;&nbsp;</strong>
            {
                showMobileMenu ? <FaTimes/>:<FaBars/>
            }
          
        </MobileIcon>
    
        
        <Menu  open= {showMobileMenu}>

        
            <MenuItem >
            <MenuItemLink  href="/home" className="font-weight-bold" onClick= {()=>setshowMobileMenu(!showMobileMenu)}>
                
            <div>
<FaHome/>
            Inicio
            </div>
            
            </MenuItemLink>
            </MenuItem>
     
            
            <MenuItem >
            
            <MenuItemLink  href="/vacunas" className="font-weight-bold" onClick= {()=>setshowMobileMenu(!showMobileMenu)}>
            
            <div>
<FaChild/>
Vacunas
            </div>
            
            </MenuItemLink>
            
            </MenuItem>
            
            <MenuItem>
            <MenuItemLink href="/#" className="font-weight-bold" onClick= {()=>setshowMobileMenu(!showMobileMenu)}>
         
            <div>
<FaUserAlt/>
Perfiles
            </div>
            </MenuItemLink>
            </MenuItem>
            <MenuItem>
            <MenuItemLink href="/creditos" className="font-weight-bold" onClick= {()=>setshowMobileMenu(!showMobileMenu)}>
           
            <div>
<FaBriefcase/>
Créditos
            </div>
            </MenuItemLink>
            </MenuItem>
            
        </Menu>
       
        </IconContext.Provider>
    </Wrapper>
</Container>

    )
}
export default Navbar