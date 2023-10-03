import styled from "styled-components"

import logo from '../assets/logo.svg'
import { AddressBadge, CartBadge } from "./Badge"
import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { Link } from "react-router-dom"


export const Header = () => {
    const { coffeeDeliveryCart, coffeeDeliveryAddress } = useContext(ProductsContext)

    return (
        <HeaderContainer>
            <Link to="/" title="Home">
                <img src={logo} alt="Coffee Delivery" />
            </Link>

            <div>
                <AddressBadge>
                    {coffeeDeliveryAddress.cidade && `${coffeeDeliveryAddress.cidade}, `}
                    {coffeeDeliveryAddress.uf}    
                </AddressBadge>                
                <Link to="checkout" title="Checkout">
                    <CartBadge counter={Object.values(coffeeDeliveryCart).reduce((acc, amount) => acc+amount, 0)} />
                </Link>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: calc(100% - 80px);
    max-width: 1124px;

    padding: 32px 40px;

    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        gap: 12px;
    }
`