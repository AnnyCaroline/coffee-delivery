import React from "react";
import styled from "styled-components";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

export const InputText = ({required, ...rest}: InputTextProps) => {
    return (
        <InputTextContainer className="input-text-container">
            <input {...rest}/>
            {!required && <span>Optional</span> }
        </InputTextContainer>
    )
}

const InputTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &, input {
        background-color: ${({ theme }) => theme['base-input']};
        border: 1px solid ${({ theme }) => theme['base-button']};
        border-radius: 4px;

        font-size: 0.875rem; // 14px
    }

    input {
        padding: 12px;
        outline: none;

        border: none;

        width: 100%;

        box-sizing: border-box;
    }

    span {
        color: ${({ theme }) => theme['base-label']};
        font-family: Roboto, sans-serif;
        font-size: 0.75rem; // 12px
        font-style: italic;
        font-weight: 400;
        line-height: 130%; /* 15.6px */
        padding-right: 12px;
    }


    &:focus-within {
        border: 1px solid ${({ theme }) => theme['yellow-dark']};
        outline: none;
    }

    
`