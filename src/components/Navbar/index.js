import React, { useState } from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './navbarElements'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
const Navbar  = () => {
    const [scrollNav, setScrollNav] = useState(false)
    const toogleHome = () => {
        scroll.scrollToTop();
        
    }
  return (
   <>
   <Nav>
       <NavbarContainer>
           <NavLogo to='/' onClick={toogleHome}>GoQuizz</NavLogo>
           <MobileIcon>
               <FaBars />
           </MobileIcon>
           <NavMenu>
               <NavItem>
                   <NavLinks to='Downloand'
                   smooth={true}
                   duration={500}
                   spy={true}
                   exact={true}
                   offset={-80}>Descarga</NavLinks>

                </NavItem>
                <NavItem>
                   <NavLinks to="Info"
                   smooth={true}
                   duration={500}
                   spy={true}
                   exact={true}
                   offset={-80}>como funciona?</NavLinks>

                </NavItem>
                <NavItem>
                   <NavLinks to="Last"
                   smooth={true}
                   duration={500}
                   spy={true}
                   exact={true}
                   offset={-80}>Opiniones</NavLinks>

                </NavItem>
                
            
           </NavMenu>
       </NavbarContainer>
   </Nav>
   
   
   </>
  )
}

export default Navbar 