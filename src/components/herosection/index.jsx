import React,{useState} from 'react'
import Video from '../../video/Pexels Videos 1550080.mp4'
import {Button} from '../../components/ButtonElement'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Mouse,
  Mousecontainer


} from './heroelement'
const HeroSection = ({ScrollYvalue}) => {
  const [hover,setHover] = useState(false)
  const onHover = () =>{
    setHover(!hover)
  }
 
  console.log(ScrollYvalue)
  return (
    <HeroContainer>
      <HeroBg scroll={ScrollYvalue}>
        <VideoBg src={Video} autoPlay loop muted type='video/mp4'/>
          <Mousecontainer>
        <Mouse></Mouse>
        </Mousecontainer>
        </HeroBg>
      <HeroContent scroll={ScrollYvalue}>
        <HeroH1>Eric is  developer</HeroH1>
        <HeroP>
          Let's talk with Eric. and then see the how to hire hime.
          now, it is good time to hire
        </HeroP>
        <HeroBtnWrapper>
        <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
          primary='true'
          dark='true'
        >
          Get started {hover ? <ArrowForward/> : <ArrowRight/> }</Button>
        </HeroBtnWrapper>
      </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection
