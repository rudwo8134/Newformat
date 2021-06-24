import styled from 'styled-components'
import {FaCanadianMapleLeaf} from 'react-icons/fa'
import {GiCancel} from 'react-icons/gi'

export const CanadaMark = styled(FaCanadianMapleLeaf)`

`
export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg})=>(lightBg ? '#f9f9f9' : '#010606')};
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
    position: relative;
`
export const InfoWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'`: `'col1 col2'`)};
    
    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=>(imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine = styled.div`
    color: #01BF71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 768px){
        font-size: 32px;
    }
`
export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText})=>(darkText ? '#010606':'#fff')};
`
export const Skills = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 15px;
    line-height: 24px;
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 30rem;
    border-radius: 50%;
    margin-bottom: 10rem;
    margin-left: 2rem;
    overflow: hidden;
    opacity: 1;
    transition: all 1s ease-in-out;
    &:hover{
        img{
            transform:scale(1.2);
            filter:grayscale(60%);
            transition: all 1s ease-in-out;
        }
    }
`
export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    filter: grayscale(90%);
`
export const Detaildiv = styled.div`
    background: #444;
    z-index: 1;
    top: 50%;
    left:50%;
    position: absolute;
    width: 60rem;
    height: 30rem;
    transition: all 1s ease-in-out;
    display: ${({show})=>(show ? 'flex':'none')};
    opacity: 0.9;
    border-radius: 30px;
    overflow-y: scroll;
    justify-content: center;
    align-items: center ;
    animation: drop 1s forwards;

    @keyframes drop{
        0%{opacity: 0.1;}
        50%{opacity: 0.5;}
        100%{transform: translate(-50%,-50%)}
    }

    @media screen and (max-width:768px){
        width: 100%;
        height: 90%;
    }
`
export const Detailcacelbutton = styled(GiCancel)`
    position: absolute;
    top:10px;
    left:10px;
    width: 2rem;
    height: 2rem;
    color: #04bf71;
    z-index: 2;
    &:hover{
        cursor: pointer;
        color: #DE4A45;
    }
`
export const DetailcontentContainer = styled.div`
background:white;
margin-top: 2rem;
width: 95%;
height: 90%;
border-radius: 30px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow:scroll;

`
export const DetailText = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const DetailHeader= styled.h1`
    color:black;
`
export const DetailSub= styled.a`
    color:black;
    margin: 1rem 0rem;
    &:hover{
        transform: scale(1.2);
        color:skyblue;
    }
`

export const Resumeimg = styled.img`
width: 80%;
height: 80vh;
border-radius: 40px;
border: 1px solid grey;
transition: all 0.5s ease-in-out;
&:hover{
    transform: scale(1.3);
}
`