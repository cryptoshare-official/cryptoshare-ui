import React from 'react'
import SideMenu from './side-menu'
import Layout from '@/components/ui/layout'
import { Container, Main } from './styles'

const WhitepaperLayout: React.FC = ({ children }) => {
    return (
        <Layout>
            <Container>
                <SideMenu />

                <Main>{children}</Main>
            </Container>
        </Layout>
    )
}

export default WhitepaperLayout
