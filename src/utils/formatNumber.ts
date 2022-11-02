function formatNumber ( value: number ): string { 
  return new Intl.NumberFormat("US").format(value)
}

export default formatNumber