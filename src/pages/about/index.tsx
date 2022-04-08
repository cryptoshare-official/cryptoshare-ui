import React from 'react'
import Meet from '@/components/about/meet'
import Team from '@/components/about/team'
import Partners from '@/components/about/partners'
import AppHead from '@/components/common/app-head'
import SpotlightTitle from '@/components/about/spotlight-title'

const About: React.FC = () => {
    return (
        <>
            <AppHead title="Home" />

            <SpotlightTitle />
            <Meet />
            <Team />
            <Partners />
        </>
    )
}

export default About
