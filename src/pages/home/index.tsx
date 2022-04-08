import { useMapState } from '@/hooks'
import React, { useEffect } from 'react'
import Member from '@/components/home/member'
import Roadmap from '@/components/home/roadmap'
import AppHead from '@/components/common/app-head'
import { scrollTo } from '@/helpers/scroll.helper'
import WhiteList from '@/components/home/whitelist'
import OurAssets from '@/components/home/our-assets'
import { setDelegateHome } from '@/store/reducers/ui.reducer'
import CarouselSlider from '@/components/home/carousel-slider'
import { UiStateInterface } from '@/store/interfaces/uiState.interface'

const Home: React.FC = () => {
    const { delegateHome } = useMapState('ui') as UiStateInterface

    useEffect(() => delegateScroll(), [])

    const delegateScroll = () => {
        if (!delegateHome) return

        setTimeout(() => {
            scrollTo(delegateHome)
            setDelegateHome('')
        }, 700)
    }

    return (
        <>
            <AppHead title="Home" />

            <CarouselSlider />
            <OurAssets />
            <WhiteList />
            <Member />
            <Roadmap />
        </>
    )
}

export default Home
