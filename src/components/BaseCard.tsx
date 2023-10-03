import styled from "styled-components";

export const BaseCard = styled.div`
    background-color: ${({ theme }) => theme['base-card']};
    border-radius: 6px 36px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
`