const IntlLocaleMap = {
  pt: 'pt-BR'
} as const

export function formatQuantity({
  quantity,
  locale
}: {
  quantity: number
  locale: string
}) {
  return new Intl.NumberFormat(IntlLocaleMap[locale]).format(quantity)
}

export function formatCurrency({
  price,
  locale
}: {
  price: number
  locale: string
}) {
  return new Intl.NumberFormat(IntlLocaleMap[locale], {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
