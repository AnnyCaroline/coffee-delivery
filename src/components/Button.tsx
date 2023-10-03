import { ShoppingCart, Trash } from "phosphor-react"
import styled, { css } from "styled-components"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'icon',
    children: React.ReactNode
}

export const Button = ({ variant = 'primary', children, ...remainingProps }: ButtonProps) => {
    return (
        <StyledButton variant={variant} {...remainingProps}>{children}</StyledButton>
    )
}

const StyledButton = styled.button<{variant: ButtonProps['variant']}>`
    font-family: Roboto, sans-serif;
    text-transform: uppercase;

    text-decoration-line: none !important;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border: none;
    border-radius: 6px;
    cursor: pointer;
    
    ${({ variant, theme }) => {
        if (variant === 'primary') {
            return css `
                background-color: ${theme.yellow};
                color: ${theme.white};

                font-size: 0.875rem; // 14px
                font-style: normal;
                font-weight: 700;
                line-height: 160%; // 22.4px

                min-width: 132px;
                padding: 12px 8px;

                &:hover {
                    background-color: ${theme["yellow-dark"]};
                }
            `
        } else  if (variant === 'secondary') {
            return css `
                background-color: ${theme["base-button"]};
                color: ${theme["base-text"]};

                font-size: 0.75rem; // 12px
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 19.2px */   

                padding: 8px;

                svg {
                    * {
                        color: ${theme.purple};
                    }
                }

                &:hover {
                    background-color: ${theme["base-hover"]};
                    color: ${theme['base-subtitle']};
                }
            `
        } else {
            return css`
                background-color: ${theme["purple-dark"]};
                color: ${theme.white};
                padding: 8px;

                &:hover {
                    background-color: ${theme["purple"]};
                }
            `
        }
    }}
`


interface CartButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CartButton = ({...rest}: CartButtonProps) => {
    return (
        <Button variant="icon" {...rest}>
            <ShoppingCart size={16} weight="fill" />
        </Button>
    )
}

interface RemoveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const RemoveButton = ({...rest}: RemoveButtonProps) => {
    return (
        <Button variant="secondary" {...rest}>
            <Trash size={16} />
            Remover
        </Button>
    )
}