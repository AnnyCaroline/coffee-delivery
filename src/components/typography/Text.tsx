import React from "react"
import styled, { css } from "styled-components"

type TextPropsL = {
    size: 'l'
    weight?: 'regular' | 'bold'
    children: React.ReactNode
    component?: 'span' | 'label',
}

type TextPropsM = {
    size: 'm'
    weight?: 'regular' | 'bold'
    children: React.ReactNode
    component?: 'span' | 'label'
}

type TextPropsS = {
    size: 's'
    weight?: 'regular'
    children: React.ReactNode
    component?: 'span' | 'label'
}

type TextPropsXs = {
    size: 'xs'
    weight?: 'bold'
    children: React.ReactNode
    component?: 'span' | 'label'
}

type TextProps = TextPropsL | TextPropsM | TextPropsS | TextPropsXs;

export const Text = ({ size, weight, children, component = "span", ...rest } : TextProps) => {

    const Component = component === 'label' ? styled.label : styled.span

    const TextContainer = Component<{
        size: TextProps["size"],
        weight: TextProps["weight"]
    }>`
        font-family: 'Roboto', sans-serif;
        line-height: 130%;
    
        ${({ size, weight, theme }) => {
            if (size === 'l') {
                return css`
                    font-size: 1.25rem; // 20px
                    font-weight: ${weight === 'bold' ? 700 : 400};
                    color: ${({ theme }) => theme['base-subtitle']}
                `
            } else if (size === 'm') {
                return css`
                    font-size: 1rem; // 16px
                    font-weight: ${weight === 'bold' ? 700 : 400};
                `
            } else if (size === 's') {
                return css`
                    color: ${theme => theme['base-label']};
                    font-size: 0.875rem; // 14px
                    font-weight: 400;
                `
            } else if (size === 'xs') {
                return css`
                    font-size: 0.75rem; // 12px
                    font-weight: 700;
                `
            }
        }}
    `

    return (
        <TextContainer size={size} weight={weight} {...rest}>
            {children}
        </TextContainer>
    )
    
}

