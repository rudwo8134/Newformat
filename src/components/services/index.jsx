import React from 'react'
import icon1 from '../../images/1-4.svg'
import icon2 from '../../images/1-5.svg'
import icon3 from '../../images/1-6.svg'
import {ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './serviceelement'
const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>our services</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={icon1}/>
                <ServicesH2>it is my job</ServicesH2>
                <ServicesP>lodasdasda</ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={icon2}/>
            <ServicesH2>i can do it</ServicesH2>
            <ServicesP>lodasdasda</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={icon3}/>
        <ServicesH2>premium benefts</ServicesH2>
        <ServicesP>lodasdasda</ServicesP>
        </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
