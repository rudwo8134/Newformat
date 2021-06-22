import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinktitle,
    FooterLink,
    SocialMedia
    ,
    SocialLogo
    ,
    WebsiteRights
    ,
    SocialIcons
    ,
    SocialIconLink,
    SocialMediaWrap
} from './footerelement'

import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaYoutube } from 'react-icons/fa'
const Footer = () => {
    const togglehome = () => {
        scroll.scrollToTop();
      }
    return (
        <FooterContainer>
            <FooterWrap>
            <FooterLinkContainer>
            <FooterLinkWrapper>
            <FooterLinkItems>
            <FooterLinktitle>About us</FooterLinktitle>
                <FooterLink to='/'>how it works</FooterLink>
                <FooterLink to='/'>testmonials</FooterLink>
                <FooterLink to='/'>careers</FooterLink>
                <FooterLink to='/'>invester</FooterLink>
                <FooterLink to='/'>terms of condition</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinktitle>About us</FooterLinktitle>
                <FooterLink to='/'>how it works</FooterLink>
                <FooterLink to='/'>testmonials</FooterLink>
                <FooterLink to='/'>careers</FooterLink>
                <FooterLink to='/'>invester</FooterLink>
                <FooterLink to='/'>terms of condition</FooterLink>
            </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
            <FooterLinkItems>
            <FooterLinktitle>About us</FooterLinktitle>
                <FooterLink to='/'>how it works</FooterLink>
                <FooterLink to='/'>testmonials</FooterLink>
                <FooterLink to='/'>careers</FooterLink>
                <FooterLink to='/'>invester</FooterLink>
                <FooterLink to='/'>terms of condition</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinktitle>About us</FooterLinktitle>
                <FooterLink to='/'>how it works</FooterLink>
                <FooterLink to='/'>testmonials</FooterLink>
                <FooterLink to='/'>careers</FooterLink>
                <FooterLink to='/'>invester</FooterLink>
                <FooterLink to='/'>terms of condition</FooterLink>
            </FooterLinkItems>
            </FooterLinkWrapper>
            </FooterLinkContainer>
            <SocialMedia>
            <SocialMediaWrap>
            <SocialLogo onClick={togglehome} to='/'> Eric's</SocialLogo>
            <WebsiteRights> Eric &#169; {new Date().getFullYear()} All right reserved </WebsiteRights>
            <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram'><FaInstagram/></SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='twitter'><FaTwitter/></SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Linkdin'><FaLinkedin/></SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='youtube'><FaYoutube/></SocialIconLink>
            </SocialIcons>
            </SocialMediaWrap>
            </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
