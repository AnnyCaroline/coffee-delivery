import styled, { useTheme } from "styled-components"
import { MapPin, Timer, CurrencyDollar } from "phosphor-react"

import success from '../assets/success.svg'
import { Item } from "../components/Item"
import { Text, Title } from "../components/typography"
import { useContext, useEffect } from "react"
import { ProductsContext } from "../contexts/ProductsContext"

export const Success = () => {
    const theme = useTheme()

    const { coffeeDeliveryAddress, clearCart } = useContext(ProductsContext)

    useEffect(() => {
        clearCart({})
    }, [])

    return (
        <SuccessContainer>
            <Title size='l' color={theme['yellow-dark']}>Uhu! Pedido confirmado</Title>
            <Text size='l'>Agora é só aguardar que logo o café chegará até você</Text>

            <div>
                <div>
                    <Item
                        color={theme.purple}
                        title={
                            <>
                                <span>Entrega em <b>{coffeeDeliveryAddress.rua}</b></span>
                                <br/>
                                <span> {coffeeDeliveryAddress.bairro} - {coffeeDeliveryAddress.cidade}, {coffeeDeliveryAddress.uf}</span>
                            </>
                        }
                        IconComponent={MapPin}
                    />

                    <Item
                        color={theme.yellow}
                        title={
                            <>
                                <span>Previsão de entrega</span>
                                <br/>
                                <span><b>20 min - 30 min</b></span>
                            </>
                        }
                        IconComponent={Timer}
                    />

                    <Item
                        color={theme['yellow-dark']}
                        title={
                            <>
                                <span>Pagamento na entrega</span>
                                <br/>
                                <span><b>Cartão de Crédito</b></span>
                            </>
                        }
                        IconComponent={CurrencyDollar}
                    />
                </div>

                <img src={success} alt="" />
            </div>
        </SuccessContainer>
    )
}

const SuccessContainer = styled.div`
    width: calc(100% - 80px);
    max-width: 1124px;

    padding: 32px 40px;

    margin: 0 auto;

    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        gap: 32px;

        > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: left;

            gap: 32px;
            
            border-radius: 6px 36px;
            border: 1px solid #DBAC2C;

            padding: 40px;

            width: 450px;
        }
    }
`