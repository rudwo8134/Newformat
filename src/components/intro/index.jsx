import React,{useState} from 'react'
import Image from '../../images/resume.png'
import { Column2, Img, ImgWrap,InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Skills,
  CanadaMark,
  Detaildiv,
  Detailcacelbutton,
  DetailcontentContainer,
  DetailHeader,
  DetailText,
  DetailSub,
  Resumeimg
} from './introelement'
import {Button} from '../ButtonElement'


const Intro = ({dark2,dark,primary,topLinetext,imgStart,lightBg,lightText,id,headline,darkText,description,buttonLabel,img,alt}) => {
    const [clickpop,setclickpop] = useState(false)
    const handlebutton = () =>{
        setclickpop(!clickpop)
    }

    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
            <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>{topLinetext}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description} in Canada <CanadaMark/></Subtitle>
                <Skills>
                I have passion to build the code on the front-end side.
                I have a Advanced-diploma on Cenetennial college. 
                I have many expriences on the workplace. 
                I was recently worked in Siemens. So I had a lot of chances to get Experiences about electronics and software.
                </Skills>
                <BtnWrap>
                    <Button 
                    onClick={handlebutton}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark = {dark ? 1 : 0}
                    dark2 = {dark2 ? 1 : 0}
                    to='home'>Watch Resume</Button>
                </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
            <Img src={img} alt={alt}/>
            </ImgWrap>
            </Column2>
            </InfoRow>
            </InfoWrapper>
            <Detaildiv offset={-80} show={clickpop} >
            <Detailcacelbutton onClick={handlebutton}/>
            <DetailcontentContainer>
                <DetailText>
                <DetailHeader>Resume</DetailHeader>
                <DetailSub href='https://docs.google.com/document/d/1R_ddsBG6n_OYaVIDmwQHuODCGB9VAbYdsRh6gpCrURc/export?format=pdf'>Click to download</DetailSub>
                </DetailText>
                <Resumeimg src={Image}/>
            </DetailcontentContainer>
            </Detaildiv>
          </InfoContainer>  
        </>
    )
}

export default Intro
