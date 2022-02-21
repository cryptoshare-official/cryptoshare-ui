import CardActive from '@/components/common/card-active'
import { useTranslate } from '@/hooks/translate.hook'
import { HomeTranslateType } from '@/locales/types'
import locale from '@/locales/pages/home'
import React from 'react'

import { Container, Title, Separator, AssetsGrid } from './styles'

const OurAssets: React.FC = () => {
    const translate = useTranslate<HomeTranslateType>(locale)

    const actives = [
        {
            id: 1,
            icon: 'icon',
            title: 'Crypto Imóveis',
            description:
                'Os ativos Crypto Imóveis trazem para o mundo Crypto a possibilidade de ter uma parte de um ou um grupo de imóveis e receber rendimentos mensais de acordo com os resultados obtidos com os aluguéis dos imóveis ou vendas. Novamente focando em democratização, viabilizando o investimento de qualquer valor.'
        },
        {
            id: 1,
            icon: 'icon',
            title: 'Crypto Startups',
            description:
                'Os ativos Crypto Startups estão focados na democratização do investimento em novos negócios promissores que geralmente estão acessíveis apenas a grandes investidores e grupos, viabilizando assim a participação dos pequenos investidores com qualquer valor.'
        },
        {
            id: 1,
            icon: 'icon',
            title: 'Crypto Franquia',
            description:
                'Os ativos Crypto Franquia estão focados na democratização desse tipo de negócio, viabilizando a participação em franquias de renome que demandam conhecimento de mercado e operacional, além de grandes investimentos.'
        },
        {
            id: 1,
            icon: 'icon',
            title: 'Crypto Negocios',
            description:
                'Os ativos Crypto Negócios são voltados a oportunidade de negócios já estabilizadas no mercado e com bons resultados.'
        }
    ]

    return (
        <Container id="assets">
            <Title>
                <Separator />
                {translate.ourAssets}
            </Title>

            <AssetsGrid>
                {actives.map((item, index) => (
                    <CardActive
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </AssetsGrid>
        </Container>
    )
}

export default OurAssets
