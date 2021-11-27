const formatter = Intl.NumberFormat('ko-KR');

export const currency = (value) => {
    return formatter.format(value);
}
