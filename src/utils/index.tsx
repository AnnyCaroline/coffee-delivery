export const priceFormatter = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price).split(' ')[1]
}

export const getImgPath = (imgName: string): string => {
    return `/src/assets/cups/${imgName}.svg`
}  