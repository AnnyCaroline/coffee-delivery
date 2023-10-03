import React, { useState } from "react"
import styled, { useTheme } from "styled-components"
import { css } from "styled-components"

export interface Option {
    value: string,
    label: string,
    Component: React.ReactNode
}

interface SelectProps {
    options: Option[],
    selected?: Option | null,
    onSelect: (newValue: Option) => void
}

export const Select = ({ options, selected, onSelect }: SelectProps) => {
    const theme = useTheme()

    return (
        <SelectContainer>
            {options.map(option => {
                return (
                    <StyledButton
                        onClick={() => {
                            console.log(option)
                            onSelect(option)
                        }}
                        selected={selected?.value === option.value}
                    >
                        <option.Component size={16} color={theme.purple} />
                        {option.label}
                    </StyledButton>
                )
            })}
        </SelectContainer>
    )
}

const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 12px;

    @media (max-width: 1280px) {
        flex-direction: column;
    }
`

const StyledButton = styled.button<{selected: boolean}>`
    padding: 16px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 12px;
    
    border: 1px solid transparent;
    border-radius: 6px;
    
    font-family: Roboto, sans-serif;
    font-size: 0.75rem; // 12px
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    text-transform: uppercase;

    color: ${({ theme }) => theme['base-text']};

    cursor: pointer;

    outline: none;

    &:focus {
        border: 1px solid ${({ theme }) => theme['yellow-dark']};
    }

    ${({ selected }) => selected ? css`
        background-color: ${({ theme }) => theme['purple-light']};

        border: 1px solid ${({ theme }) => theme.purple};
    ` : css`
        background-color: ${({ theme }) => theme['base-button']};
    
        &:hover {
            background-color: ${({ theme }) => theme['base-hover']};
        }
    `}
`

