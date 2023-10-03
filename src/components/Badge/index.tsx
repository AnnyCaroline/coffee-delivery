import { MapPin, ShoppingCart } from "phosphor-react";
import styled, { css } from "styled-components"

interface AddressBadgeProps {
    children: string;
}

export const AddressBadge = ({ children }: AddressBadgeProps) => {
    return (
        <AddressBadgeContainer>
            <MapPin size={22} weight="fill" />
            <span>{children}</span>
        </AddressBadgeContainer>
        
    )
}

interface CartBadgeProps {
    counter: number;
}

export const CartBadge = ({ counter }: CartBadgeProps) => {
    return (
        <CartBadgeContainer counter={`${counter}`}>
            <ShoppingCart size={22} weight="fill" />
        </CartBadgeContainer>
    )
}

const Badge = styled.div`
    width: fit-content;
    padding: 8px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 6px;

    font-family: Roboto, sans-serif;
    font-size: 0.875rem; // 14px
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
`

const AddressBadgeContainer = styled(Badge)`
    background-color: ${({ theme }) => theme['purple-light']};
    color: ${({ theme }) => theme['purple-dark']};
    
    padding-right: 12px;
`

const CartBadgeContainer = styled(Badge)<{counter: string}>`
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};

    position: relative;

    ${({ counter }) => counter !== '0' && css`
        &::after {
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: -8px;
            left: 26px;

            content: '${counter}';
            border-radius: 12px;

            background-color: ${({ theme }) => theme['yellow-dark']};
            color: ${({ theme }) => theme.white};
            
            font-weight: bold;
            font-size: 0.75rem; // 12px
            
            box-sizing: border-box;
            height: 20px;
            min-width: 20px;
        }  
    `}
`