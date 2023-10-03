import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react"
import styled, { useTheme } from "styled-components"

import { Title, Text } from "../../components/typography"

import { Products } from "./Products"

import banner from "../../assets/banner.svg"
import bannerBackground from "../../assets/banner-background.png"
import { Item } from "../../components/Item"

export const Home = () => {
    const theme = useTheme()

    return (
        <HomeContainer>
            <div>
                <Banner>                
                    <div>
                        <Title size="xl">Encontre o café perfeito para qualquer hora do dia</Title>
                        <Subtitle size="l">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>

                        <Itens>

                            <Item
                                color={theme['yellow-dark']}
                                title="Compra simples e segura"
                                IconComponent={ShoppingCart}
                            />

                            <Item
                                color={theme['base-text']}
                                title="Embalagem mantém o café intacto"
                                IconComponent={Package}
                            />

                            <Item
                                color={theme['yellow']}
                                title="Entrega rápida e rastreada"
                                IconComponent={Timer}
                            />

                            <Item
                                color={theme.purple}
                                title="O café chega fresquinho até você"
                                IconComponent={Coffee}
                            />                        
                        </Itens>
                    </div>

                    <div>
                        <img src={banner} width={470} />
                    </div>
                </Banner>

                <Products />
            </div>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;

    background-image: url(${bannerBackground});
    background-size:  110% 500px;
    background-repeat: no-repeat;
    background-position: center top;

    > div {
        max-width: 1124px;
        margin: 0 auto;
    }
`

const Banner = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }

    gap: 56px;
    padding: 92px 0;
`

const Subtitle = styled(Text)`
    color: ${({theme}) => theme["base-subtitle"]};
`

const Itens = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;

    gap: 20px 20px;

    margin-top: 66px;
`