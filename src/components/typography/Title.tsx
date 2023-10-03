import React from "react"
import styled, { css } from "styled-components"

interface TitleProps {
    size: 'xl' | 'l' | 'm' | 's' | 'xs'
    children: React.ReactNode
    color?: string
}

export const Title = ({ size, children, color } : TitleProps) => {
    return (
        <TitleContainer color={color}>
            {size === 'xl' ? (
                <h1>{children}</h1>
            ) : size === 'l' ? (
                <h2>{children}</h2>
            ) : size === 'm' ? (
                <h3>{children}</h3>
            ) : size === 's' ? (
                <h4>{children}</h4>
            ) : size === 'xs' && (
                <h5>{children}</h5>
            )}
        </TitleContainer>
    )
}

const TitleContainer = styled.span<{ color: string }>`
    font-family: 'Baloo 2', sans-serif;

    h1 {
        ${({ color }) => color && css`
            color: color;
        `}

        font-size: 3rem; // 48px
        font-weight: 800;
        line-height: 110%;
    }

    h2 {
        color: ${({ theme, color }) => color || theme['base-subtitle']};
        
        margin: 4px 0px;

        font-size: 2rem; // 32px
        font-weight: 800;
        line-height: 130%;
    }

    h3 {
        color: ${({ theme, color }) => color || theme['base-subtitle']};
        margin: 0;

        font-size: 1.5rem; // 24px
        font-weight: 800;
        line-height: 130%;
    }

    h4 {
        color: ${({ theme, color }) => color || theme['base-subtitle']};
        margin: 0;
        
        font-size: 1.25rem; // 20px
        font-weight: 700;
        margin: 0;
        line-height: 130%;
    }

    h5 {
        font-size: 1.125rem; // 18px
        color: ${({ theme, color }) => color || theme['base-subtitle']};
        font-weight: 700;
        line-height: 130%;
    }
`