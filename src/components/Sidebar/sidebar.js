import React from 'react'
import { SidebarContainer, 
         Icon, 
         CloseIcon, 
         SideWrapper, 
         SidebarMenu, 
         SidebarLink, 
        } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
            <Icon onClick={ toggle }>
                <CloseIcon></CloseIcon>
            </Icon>
            <SideWrapper>
                    <SidebarMenu>
                    <SidebarLink to='about' onClick={ toggle }>About</SidebarLink>
                    <SidebarLink to='skills' onClick={ toggle }>Skills</SidebarLink>
                    <SidebarLink to='projects' onClick={ toggle }>Projects</SidebarLink>
                    <SidebarLink to='experience' onClick={ toggle }>Experience</SidebarLink>
                    <SidebarLink to='contact' onClick={ toggle }>Conatct</SidebarLink>
                    </SidebarMenu>
            </SideWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

