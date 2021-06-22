import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './sidebarelement'

function Sidabar({isOpen,toggle}) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='about'>
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to='discover'>
            Discover
          </SidebarLink>
          <SidebarLink onClick={toggle} to='services'>
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle} to='signup'>
            Signup
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick={toggle} to='/'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidabar
