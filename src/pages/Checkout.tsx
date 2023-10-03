import { useContext, useEffect, useState } from "react"
import styled, { useTheme } from "styled-components"
import { ProductsContext } from "../contexts/ProductsContext"

import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react"

import { getImgPath } from "../utils"
import { BaseCard } from "../components/BaseCard"
import { Title, Text } from "../components/typography"
import { Button, RemoveButton } from "../components/Button"
import { Price } from "../components/Price"
import { NumberButton } from "../components/NumberButton"
import { Select, Option as PaymentMethod } from "../components/Select"
import { InputText } from "../components/InputText"
import { Link } from "react-router-dom"

interface ProductProps {
    uuid: string,
    img: string,
    name: string,
    price: number,
    amount: number
}

const paymentMethods = {
    credito: {
        value: "credito",
        label: "cartão de crédito",
        Component: CreditCard,
    },
    debito: {
        value: "debito",
        label: "cartão de débito",
        Component: Bank
    },
    dinheiro: {
        value: "dinheiro",
        label: "dinheiro",
        Component: Money
    }
}

const Product = ({ uuid, img, name, price, amount }: ProductProps) => {
    const { updateCoffeeAtCart } = useContext(ProductsContext)

    return (
        <ProductContainer>
            <div>
                <img src={getImgPath(img)} alt="" width={64} />
            </div>
            <div>
                <Text size="m">{name}</Text>
                <ButtonsContainer>
                    <NumberButton
                        value={amount}
                        onChange={(newValue) => {updateCoffeeAtCart(uuid, newValue)}}
                    />
                    <RemoveButton onClick={() => updateCoffeeAtCart(uuid, 0)} />
                </ButtonsContainer>
            </div>
            <div>
                <Price value={price} size="m" weight="bold"/>
            </div>
        </ProductContainer>
    )
}

const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    border-bottom: 1px solid ${({ theme }) => theme['base-button']};

    padding-bottom: 24px;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
`

export const Checkout = () => {
    const {
        coffeeDeliveryCart,
        products,
        coffeeDeliveryPaymentMethod,
        coffeeDeliveryAddress,
        updatePaymentMethod,
        updateAddress
    } = useContext(ProductsContext)
    const theme = useTheme()

    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | undefined>(undefined)

    useEffect(() => {
        setPaymentMethod(paymentMethods[coffeeDeliveryPaymentMethod])
    }, [coffeeDeliveryPaymentMethod])

    let total = 0

    return (
        <CheckoutContainer>
            <div>
                <Title size="xs">Complete seu pedido</Title>
                <StyledBaseCard>
                    <div>
                        <div>
                            <MapPinLine size={22} color={theme['yellow-dark']} />
                        </div>

                        <div>
                            <Text size="m">Endereço de entrega</Text>
                            <Text size="s">Informe o endereço onde deseja receber seu pedido</Text>
                        </div>
                    </div>
                    <div>
                        <AddressFormContainer>
                            <div style={{ gridColumn: '1/4', gridRow: '1'}}>
                                <Text size="s" component="label" htmlFor="cep">Cep</Text>
                                <InputText
                                    id="cep"
                                    type="text"
                                    required={true}
                                    value={coffeeDeliveryAddress?.cep}
                                    onChange={(e) => {
                                        updateAddress('cep', e.target.value)
                                    }}
                                />
                            </div>
                            
                           
                            <div style={{ gridColumn: '1/9', gridRow: '2'}}>
                                <Text size="s" component="label" htmlFor="rua">Rua</Text>
                                <InputText
                                    id="rua"
                                    type="text"
                                    required={true}
                                    value={coffeeDeliveryAddress?.rua}
                                    onChange={(e) => {
                                        updateAddress('rua', e.target.value)
                                    }}
                                />
                            </div>
                            

                            <div style={{ gridColumn: '1/4', gridRow: '3'}}>
                                <Text size="s" component="label" htmlFor="number">Número</Text>
                                <InputText
                                    id="number"
                                    type="text"
                                    required={true}
                                    value={coffeeDeliveryAddress?.numero}
                                    onChange={(e) => {
                                        updateAddress('numero', e.target.value)
                                    }} 
                                />
                            </div>

                            <div style={{ gridColumn: '4/9', gridRow: '3'}}>
                                <Text size="s" component="label" htmlFor="complemento">Complemento</Text>
                                <InputText
                                    id="complemento"
                                    type="text"
                                    required={false}
                                    value={coffeeDeliveryAddress?.complemento}
                                    onChange={(e) => {
                                        updateAddress('complemento', e.target.value)
                                    }}
                                />
                            </div>
                        
                            <div style={{ gridColumn: '1/4'}}>
                                <Text size="s" component="label" htmlFor="bairro">Bairro</Text>
                                <InputText
                                    id="bairro"
                                    type="text"
                                    required={true}
                                    value={coffeeDeliveryAddress?.bairro}
                                    onChange={(e) => {
                                        updateAddress('bairro', e.target.value)
                                    }}
                                />
                            </div>

                            <div style={{ gridColumn: '4/8'}}>
                                <Text size="s" component="label" htmlFor="cidade">Cidade</Text>
                                <InputText
                                    id="cidade"
                                    type="text"
                                    required={true}
                                    value={coffeeDeliveryAddress?.cidade}
                                    onChange={(e) => {
                                        updateAddress('cidade', e.target.value)
                                    }}
                                />
                            </div>

                            <div style={{ gridColumn: '8/9'}}>
                                <Text size="s" component="label" htmlFor="uf">UF</Text>
                                <InputText
                                    id="uf"
                                    type="text"
                                    required={true}
                                    value={coffeeDeliveryAddress?.uf}
                                    onChange={(e) => {
                                        updateAddress('uf', e.target.value)
                                    }}
                                />
                            </div>
                            
                        </AddressFormContainer>
                    </div>
                </StyledBaseCard>

                <StyledBaseCard>
                    <div>
                        <div>
                            <CurrencyDollar size={22} color={theme['purple']} />
                        </div>
                        <div>
                            <Text size="m">Pagamento</Text>
                            <Text size="s">O pagamento é feito na entrega. Escolha a forma que deseja pagar</Text>
                        </div>
                    </div>

                    
                    <Select
                        selected={paymentMethod}
                        onSelect={newPaymentMethod => {
                            setPaymentMethod(newPaymentMethod)
                            updatePaymentMethod(newPaymentMethod.value)
                        }}
                        options={[
                            paymentMethods['credito'],
                            paymentMethods['debito'],
                            paymentMethods['dinheiro']
                        ]}
                    />
                    
                </StyledBaseCard>
            </div>

            <div>
                <Title size="xs">Cafés selecionados</Title>

                <BaseCard style={{ padding: "40px" }}>
                    {products.map(product => {
                        if (coffeeDeliveryCart[product.uuid]) {
                            const amount = coffeeDeliveryCart[product.uuid]
                            total += amount * product.price
                            return (
                                <Product
                                    key={product.uuid}
                                    uuid={product.uuid}
                                    img={product.img}
                                    name={product.name}
                                    price={product.price}
                                    amount={amount}
                                />
                            )
                        }                        
                    })}

                    <Summary>
                        <div>
                            <Text size="m">Total de itens</Text>
                            <Price value={total} size="m" weight="regular" />
                        </div>


                        <div>
                            <Text size="m">Entrega</Text>
                            <Price value={3.5} size="m" weight="regular" />
                        </div>

                        <div>
                            <Text size="l" weight="bold">Total de itens</Text>
                            <Price value={total+3.5} size="l" weight="bold"/>
                        </div>
                    </Summary>

                    <Link to="/success" style={{textDecoration: 'none'}}>
                        <Button
                            type="submit"
                            style={{ alignSelf: 'stretch' }}
                        >
                            Confirmar pedido
                        </Button>
                    </Link>
                </BaseCard>
            </div>
        </CheckoutContainer>
    )
}

const CheckoutContainer = styled.div`
    width: calc(100% - 80px);
    max-width: 1124px;

    padding: 0 40px;

    margin: 0 auto;

    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;

    > div {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`

const Summary = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 14px;

    div {
        width: 100%;
        display: flex;

        flex-direction: row;
        justify-content: space-between;
    }
`

const StyledBaseCard = styled(BaseCard)`
    align-items: flex-start;

    padding: 40px;

    > div:first-child {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 8px;

        > span:first-child {
            color: ${({ theme }) => theme['base-subtitle']};
        }

        > span:last-child {
            color: ${({ theme }) => theme['base-text']};
        }

        > div {
            display: flex;
            flex-direction: column;
        }
    }
`

const AddressFormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 16px 12px;

    /* InputContainer */
    > div {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    
`

const StyledInput = styled.input`
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 4px;
    
    padding: 12px;
    font-size: 0.875rem; // 14px

    &:focus, &:active {
        border: 1px solid ${({ theme }) => theme['yellow-dark']};
        outline: none;
    }

    &::after {
        content: 'Opcional';
        position: relative;
        top: 0px;
        left: 0px;

        background: red;
    }

`