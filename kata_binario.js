function decodeBits(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    // var prueba = bits.replace(/\b000\b/g, ' ')
    return bits.split('000').join('   ').split('00').join('  ').split('0').join(' ').split('111').join('-').split('1').join('.').replace(/(?<! ) (?! )/g, "")
}

function decodeMorse(morseCode){
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    return morseCode.trim().split(' ').map(caracter => MORSE_CODE[caracter] || ' ').join('').replace(/(?<! ) (?! )/g, "").replace(/(?<! )  (?! )/g, " ")
}

console.log(decodeMorse(decodeBits("1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011")))
console.log(MORSE_CODE)