export const trimToDecimalPlaces = (value: number, places: number): string => {
    if (!value) return ''

    return parseFloat(value.toString())
        .toFixed(places)
        .replace(/^0+(\d)|(\d)0+$/gm, '$1$2')
}

export const percentage = (value: number, of: number, decimals: number) => {
    return trimToDecimalPlaces((value * 100) / of, decimals)
}

export const returnToZeroString = (value: number | string) => {
    if (!value) return '0.0'

    return value
}
