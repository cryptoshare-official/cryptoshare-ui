import Head from 'next/head'
import { useMapState } from '@/hooks'
import React, { useEffect } from 'react'
import Meet from '@/components/home/meet'
import Roadmap from '@/components/home/roadmap'
import { scrollTo } from '@/helpers/scroll.helper'
import WhiteList from '@/components/home/white-list'
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
            <Head>
                <title>Home - Crypto Share</title>
            </Head>

            <CarouselSlider />
            <OurAssets />
            <WhiteList />
            <Meet />
            <Roadmap />
        </>
    )
}

export default Home
