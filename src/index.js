module.exports = function toReadable (number) {
  const array0to19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const hundred = 'hundred'
  const spacePlace = ' '
  if (number == 0) {
    const zero = 'zero'
    return zero
  } else if (number <= 19) {
    const word = array0to19[number]
    return word
  } else if (number >= 20 && number <= 99) {
    const firstNumber99 = Math.floor(number / 10)
    const newNumber = number % 10
    if (number % 10 > 0) {
      const word2 = arrDozens[firstNumber99] + spacePlace + array0to19[newNumber]
      return word2
    } else {
      const word2 = arrDozens[firstNumber99]
      return word2
    }
  } else if (number >= 100 && number <= 999) { // 918
    const fisrtNumber999 = Math.floor(number / 100)
    if (number % 100 >= 0 && number % 100 <= 19) {
      if (number % 100 == 0) {
        const word3 = array0to19[fisrtNumber999] + spacePlace + hundred
        return word3
      } else {
        const numberinside1 = number % 100
        const word3 = array0to19[fisrtNumber999] + spacePlace + hundred + spacePlace + array0to19[numberinside1]
        return word3
      }
    } else {
      const secondNumber999 = Math.floor(number / 10) // 94.0
      const Number999 = Math.floor(secondNumber999 % 10)
      const newNumber999 = number % 10
      if (number%10 == 0) {
        const word4 = array0to19[fisrtNumber999] + spacePlace + hundred + spacePlace + arrDozens[Number999]
        return word4
      } else {
        const word4 = array0to19[fisrtNumber999] + spacePlace + hundred + spacePlace + arrDozens[Number999] + spacePlace + array0to19[newNumber999]
        return word4
      }
    }
  }
}
