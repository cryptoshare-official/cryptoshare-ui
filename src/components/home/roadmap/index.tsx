import CircleProgressBar from '@/components/common/circle-progress-bar'
import React from 'react'

import {
    Container,
    Title,
    Subtitle,
    Separator,
    Content,
    Article,
    Item,
    ItemDate,
    ItemLabel
} from './styles'

const Roadmap: React.FC = () => {
    const completedItems = [
        { date: 'outubro 2021', description: 'Idealização do Projeto' },
        { date: 'novembro 2021', description: 'Formação da Equipe' },
        {
            date: 'novembro 2021',
            description: 'Processo de Descoberta de Produto;'
        },
        {
            date: 'dezembro 2021',
            description: 'Prototipação de Alta-Fidelidade'
        },
        {
            date: 'fevereiro 2022',
            description: 'Lançamento do Site e Abertura WhiteList'
        }
    ]

    const nextItems = [
        {
            date: 'março 2022',
            description: 'Abertura ICO e NFT WhiteList Gold'
        },
        {
            date: 'abril 2022',
            description: 'Abertura ICO e NFT WhiteList Silver'
        },
        {
            date: 'abril 2022',
            description: 'Abertura ICO e NFT WhiteList Bronze'
        },
        { date: 'maio 2022', description: 'Abertura ICO e NFT Pública' },
        { date: 'maio 2022', description: 'Loteria Diária' },
        { date: 'maio 2022', description: 'Abertura do Marketplace' },
        {
            date: 'junho 2022',
            description: 'Lançamento do Crypto Ativo Startup'
        },
        {
            date: 'junho 2022',
            description: 'Lançamento do Crypto Ativo Imóvel'
        },
        {
            date: 'junho 2022',
            description: 'Lançamento do Crypto Ativo Franquia'
        },
        { date: 'junho 2022', description: 'Abertura de Parcerias Externas' },
        { date: 'julho 2022', description: 'Vendas Internas' },
        { date: 'julho 2022', description: 'Rede Solana' }
    ]

    return (
        <Container>
            <Title>
                <Separator />
                Roadmap
            </Title>

            <Content>
                <Subtitle>
                    Com base na evolução dos negócios do grupo Crypto Share, o
                    projeto de democratização dos investimentos na web3.0 tem
                    sua primeira fase estruturada com os eventos listados
                    abaixo:
                </Subtitle>

                <Article>
                    {completedItems.map(({ date, description }, index) => (
                        <Item key={index} className="completed">
                            <ItemDate>{date}</ItemDate>
                            <ItemLabel>{description}</ItemLabel>
                        </Item>
                    ))}
                </Article>

                <Article>
                    {nextItems.map(({ date, description }, index) => (
                        <Item key={index}>
                            <ItemDate>{date}</ItemDate>
                            <ItemLabel>{description}</ItemLabel>
                        </Item>
                    ))}
                </Article>

                <Subtitle>
                    Mais Ativos e Parcerias em evolução contínua de acordo com
                    as decisões da comunidade
                </Subtitle>
            </Content>
        </Container>
    )
}

export default Roadmap
