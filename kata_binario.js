function decodeBits(bits){
  
  var traduccir_0 = {
    1: "",
    2: "",
    3: " ",
    7: "   "
  }
  
  var traduccir_1 = {
    1: ".",
    2: ".",
    3: "-"
  }
  
  var resultado = ""
  var resultado_1 = ""
  
  var menor_caracter_1 = Math.min(
    ...bits
    .split("0")
    .filter(e => e !== "")
    .map(e => e.length)
  )
  
  var menor_caracter_0 = Math.min(
    ...bits
    .split("1")
    .filter(e => e !== "")
    .map(e => e.length)
  )
  
  for (let i = 0; i < bits.length; i++){
    if (i > 0 && bits[i] !== bits[i - 1]){
      resultado += "."
    }
    
    resultado += bits[i]
  }
  
  resultado = resultado.split(".").map(e => {
    if (/^0+$/.test(e)){
      resultado_1 = e.length / menor_caracter_0
      return traduccir_0[resultado_1]
    }
    
    return e
    
  }).map(e => {
    if (/^1+$/.test(e)){
      resultado_1 = e.length / menor_caracter_1
      return traduccir_1[resultado_1]
    }
    
    return e
  }).join('')
  
  return resultado
}

function decodeMorse(morseCode){
    return morseCode.trim().replace(/ {3}/g, " / ").split(' ').map(caracter => MORSE_CODE[caracter] || ' ').join('')
}

console.log(decodeBits('110110001'))
console.log(decodeMorse(decodeBits('110110001')))
console.log(MORSE_CODE)