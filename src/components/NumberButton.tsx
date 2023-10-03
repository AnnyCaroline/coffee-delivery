import styled, { useTheme } from "styled-components"
import { Plus, Minus } from "phosphor-react"

interface NumberButtonProps {
    value: number
    onChange: (amount: number) => void
}

export const NumberButton = ({ value, onChange }: NumberButtonProps) => {
    const theme = useTheme()

    return (
        <NumberButtonContainer>
            <button onClick={() => {
                onChange(value-1)
            }}>
                <Minus size={14} color={theme.purple} weight="bold" />
            </button>
            
            <span>{value}</span>

            <button onClick={() => {
                onChange(value+1)
            }}>
                <Plus size={14} color={theme.purple} weight="bold" />
            </button>
        </NumberButtonContainer>
    )
}

const NumberButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;

    background-color: ${({ theme }) => theme["base-button"]};
    color: ${({ theme }) => theme["base-text"]};

    font-size: 1rem; // 12px
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* * 20.8px */   

    border-radius: 6px;

    button {
        cursor: pointer;
        background: none;
        border: none;

        padding: 8px;

        &:hover {
            background-color: ${({ theme }) => theme["base-hover"]};
            color: ${({ theme }) => theme['base-subtitle']};
        }
    }

    button:first-child {
        border-radius: 6px 0px 0px 6px;
    }
    
    button:last-child {
        border-radius: 0px 6px 6px 0px;
    }
`