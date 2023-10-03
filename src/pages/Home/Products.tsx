import { useContext, useState } from "react"
import styled from "styled-components"
import { CircleNotch } from "phosphor-react"

import { Title, Text } from "../../components/typography"
import { CartButton } from "../../components/Button"
import { Product as ProductType, ProductsContext } from "../../contexts/ProductsContext"
import { getImgPath } from "../../utils"
import { BaseCard } from "../../components/BaseCard"
import { Price } from "../../components/Price"
import { NumberButton } from "../../components/NumberButton"

interface ProductProps {
    uuid: ProductType['uuid'] 
    img: ProductType['img'],
    pills: ProductType['pills'],
    name: ProductType['name'],
    description: ProductType['description'],
    price: ProductType['price'],
    cartAmount: number,
    handleAddToCart: (e: Event, uuid: string, amount: number) => void
}

const Product = ({ uuid, img, pills, name, description, price, handleAddToCart, cartAmount }: ProductProps) => {
    const [amount, setAmount] = useState(cartAmount)

    const handleAmountChange = (newValue: number) => {
        setAmount(newValue)
    }

    return (
        <Card >
            <div>
                <img src={getImgPath(img)} alt="" />

                <Pills>
                    {pills.map(pill => {
                        return (
                            <span>{pill}</span>
                        )
                    })}
                </Pills>

                <Title size="s">{name}</Title>
                <Text size="s">{description}</Text>
            </div>
            
            <div>
                <Price value={price} size="xl" />
                <form action="" onSubmit={(e) => {
                    handleAddToCart(e, uuid, amount)
                }}>
                    <NumberButton
                        value={amount}
                        onChange={handleAmountChange}
                    />
                    <CartButton type="submit"/>
                </form>
            </div>
        </Card>
    )
}

export const Products = () => {
    const { loading, products, updateCoffeeAtCart, coffeeDeliveryCart } = useContext(ProductsContext)

    const handleAddToCart = (e, uuid, amount): void => {
        e.preventDefault()

        updateCoffeeAtCart(uuid, amount)
    }

    return (
        <main>
            <div>
                <Title size="l">Nossos cafés</Title>
            </div>

            {loading ? (
                <LoadingContainer>
                    <CircleNotch size={32} weight="bold" />
                    <div>
                        <Title size="m">Carregando</Title>
                        <Text size="m">Buscando os melhores cafés !</Text>
                    </div>
                </LoadingContainer>
            ) : (
                <ProductsContainer>
                    {products.map(product => (
                        <Product
                            key={product.uuid}
                            uuid={product.uuid}
                            cartAmount={coffeeDeliveryCart[product.uuid] || 0}
                            img={product.img}
                            pills={product.pills}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            handleAddToCart={handleAddToCart}
                        />
                    ))}
                </ProductsContainer>
            )}
        </main>
    )
}

const LoadingContainer = styled.div`
    &, > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    gap: 20px;

    background-color: ${({ theme }) => theme['base-card']};
    border-radius: 6px 36px;
    padding: 40px;

    @keyframes rotateAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }

    svg {
        color: ${({ theme }) => theme.purple};
        animation-name: rotateAnimation;
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
`

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 32px;

    padding: 40px 0;

    @media (max-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Card = styled(BaseCard)`
    text-align: center;

    > div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;

        img {
            margin-top: -40px;
            width: 120px;
            height: 120px;
        }
    }
    
    > div:last-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        > form {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;   
            gap: 8px;

            width: 100%;
        }

        > form > input {
            width: 100px;
        }
    }
`

const Pills = styled.div`
    margin-bottom: 8px;

    display: flex;
    flex-direction: row;
    gap: 4px;

    > span {
        padding: 4px 8px;
        border-radius: 100px;
        background: ${({ theme }) => theme['yellow-light']};
        color: ${({ theme }) => theme['yellow-dark']};
        
        font-family: 'Roboto', sans-serif;
        font-size: 0.625rem; //10px
        font-weight: 700;
        text-transform: uppercase;
    }
`