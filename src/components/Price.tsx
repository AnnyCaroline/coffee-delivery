import styled, { css } from "styled-components";
import { priceFormatter } from "../utils";

interface PriceProps {
    value: number,
    size: 'xl' | 'l' | 'm',
    weight?: 'regular' | 'bold'
}

export const Price = ({ value, size, weight='regular' }: PriceProps) => {
    return (
        <PriceContainer size={size} weight={weight}>
            {priceFormatter(value)}
        </PriceContainer>   
    )
}

export const PriceContainer = styled.span<{
    size: PriceProps['size'],
    weight: PriceProps['weight']
}>`
    color: ${({ theme }) => theme['base-text']};
    font-style: normal;
    line-height: 130%;

    ${({ size, weight }) => size === 'm' ? css`
        font-family: 'Roboto', sans-serif;
        font-size: 1rem; // 16px

        font-weight: ${weight === 'bold' ? 700 : 400};
        text-align: right;

        &::before {
            content: "R$";

            margin-right: 4px;
        }
    ` : size === 'l' ? css`
        color: ${({ theme }) => theme['base-subtitle']};
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem; // 20px
        font-weight: ${weight === 'bold' ? 700 : 400};
        text-align: right;

        &::before {
            content: "R$";

            margin-right: 4px;
        }
    ` : css`
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem; // 24px
        font-weight: 800;

        &::before {
            content: "R$";

            font-family: Roboto, sans-serif;
            font-size: 0.875rem; // 14px
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 18.2px */

            margin-right: 4px;
        }
    `}
`