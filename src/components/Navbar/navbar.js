import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll  } from "react-scroll";
import { 
    Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks 
} from "./NavbarElements";

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[])
    
    return (
        <>
            <Nav scrollNav={ scrollNav }>
                <NavbarContainer>
                    <NavLogo to='/' onClick={ toggleHome }>Atul Raj</NavLogo>
                    <MobileIcon onClick={ toggle }>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' 
                                      smooth={true} 
                                      duration={500} 
                                      spy={true} 
                                      exact='true' 
                                      offset={0} 
                                      >
                                      About
                                      </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills'>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='experience'>Experience</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
