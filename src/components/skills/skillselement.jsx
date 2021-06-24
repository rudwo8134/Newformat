import styled from 'styled-components'
import {FaReact,FaHtml5,FaNode} from 'react-icons/fa'

export const InfoContainer = styled.div`
    color: #fff;
    background: #f9f9f9;
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`
export const InfoWrapper = styled.div `
    display: flex;
    z-index: 1;
    width: 100%;
    height: 1400px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    flex-direction: column;
`
export const InfoTextcontainer= styled.div`
    width: 100%;
`
export const IntroHeading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`
export const InfoTextTitle= styled.div`
    color: #01BF71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
    margin:16px 0;
`
export const InfoTextSub= styled.p`
    color:#010606;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 15px;
    line-height: 24px;
    text-align: start;
    padding: auto;
    margin: auto;
`
export const Infrologocontainer= styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 4rem;

@media screen and (max-width: 768px){
        flex-direction: column;
    }

`
export const IntroAllcoverLogo = styled.div`
display:flex;
flex-direction: column;
width: 33%;
align-items: center;
`
export const IntroLogocover= styled.div`
width: 170px;
height: 170px;
color:#01BF71;
display: flex;
border: 1px solid #01BF71;
border-radius: 50%;
align-items: center;
justify-content: center;
&:hover svg{
    transform: scale(1.2) rotate(20deg);
    color: #469c78;
}

`
export const LogoReact = styled(FaReact)`
width:6rem;
height:6rem;
transition: all 0.5s ease-in-out;
`
export const LogoJS = styled(FaHtml5)`
width:6rem;
height:6rem;
transition: all 0.5s ease-in-out;
`
export const Logonode = styled(FaNode)`
width:6rem;
height:6rem;
transition: all 0.5s ease-in-out;
`
export const IntroLogoH1=styled.div`
color: black;
font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: center;
    margin:16px 0;
`
export const IntroLogop=styled.p`
    max-width: 33%;
    height: 5rem;
    color:#010606;
    margin-bottom: 35px;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
`
export const SchoolContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 5rem;
    justify-content: center;
    align-items: flex-start;
    margin-top:3rem;
`
export const Schoolcontainercover = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
margin-bottom: 2rem;
`
export const Schoolbannerconainer = styled.div`
width:8rem;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
overflow:hidden;
margin-right: 2rem;
&:hover img{
    transform: scale(1.2);
}
`
export const Schoolbanner=styled.img`
width: 100%;
height:  100%;
transition: all 0.5s ease-in-out;
`
export const Schoolinfocontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const SchoolinfoH3 = styled.h3`
 color:#010606;
 text-align: start;
`
export const Schoolinfoh5 = styled.p`
    color:#5F6262;
`

