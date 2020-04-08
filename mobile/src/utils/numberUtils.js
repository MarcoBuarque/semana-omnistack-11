export function formatNumber(number = '') {
    return Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(number)
  }