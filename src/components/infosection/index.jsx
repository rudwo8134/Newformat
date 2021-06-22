import React from 'react'
import { Column2, Img, ImgWrap,InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from './infoelement'
import {Button} from '../ButtonElement'


const InfoSection = ({dark2,dark,primary,topLinetext,imgStart,lightBg,lightText,id,headline,darkText,description,buttonLabel,img,alt}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
            <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>{topLinetext}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                    <Button 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark = {dark ? 1 : 0}
                    dark2 = {dark2 ? 1 : 0}
                    to='home'>{buttonLabel}</Button>
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
          </InfoContainer>  
        </>
    )
}

export default InfoSection
