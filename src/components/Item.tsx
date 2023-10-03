import { ReactNode } from "react"
import styled from "styled-components"
import { useTheme } from "styled-components"
import { Text } from "./typography"

interface ItemProps {
    IconComponent: ReactNode,
    color: string,
    title: ReactNode
}

export const Item = ({ IconComponent, color, title }: ItemProps) => {

    const theme = useTheme()

    return (
        <ItemContainer color={color}>
            <div>
                <IconComponent size={16} weight="fill" color={theme.white} />
            </div>

            <Text size="m">{title}</Text>
        </ItemContainer>
    )
}



const ItemContainer = styled.div<{ color: ItemProps['color']}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    > div {
        width: 16px;
        height: 16px;
        display: flex;
        background-color: ${({ color }) => color};
        padding: 8px;
        border-radius: 50%;
    }
`