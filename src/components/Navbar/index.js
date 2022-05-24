import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './navbarElements'
import {FaBars} from 'react-icons/fa'
const Navbar  = () => {
  return (
   <>
   <Nav>
       <NavbarContainer>
           <NavLogo to='/'>GoQuizz</NavLogo>
           <MobileIcon>
               <FaBars />
           </MobileIcon>
           <NavMenu>
               <NavItem>
                   <NavLinks to="Downloand">Descarga</NavLinks>

                </NavItem>
                <NavItem>
                   <NavLinks to="design">como funciona?</NavLinks>

                </NavItem>
                <NavItem>
                   <NavLinks to="about">Opiniones</NavLinks>

                </NavItem>
                
            
           </NavMenu>
       </NavbarContainer>
   </Nav>
   
   
   </>
  )
}

export default Navbar 