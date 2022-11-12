const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")
const userInput = document.getElementById("user-input")
let num = 0

//listens for clicks on the convert button, conversion functions are passed user input values
convertBtn.addEventListener("click", function() {
    num = userInput.value
    lengthConversion()
    volumeConversion()
    massConversion()
})

//conversion function template literals are dynamic to account for naming conventions,
// e.g. '1 foot', '2 feet', '1 kilo', '.098 kilos' 
//instead of '1 feet', '2 feet', '1 kilos', '.098 kilos'

//converts meters to feet/feet to meters
function lengthConversion() {
     let feetToMeter = (num * .3048).toFixed(3)
     let meterToFeet = (num * 3.28084).toFixed(3)
     lengthEl.textContent = `${num} meter${num > 1 ? 's' : ''} 
                             = ${meterToFeet} ${meterToFeet > 1 ? 'feet' : 'foot'} 
                             | ${num} ${num <= 1 ? 'foot' : 'feet'} 
                             = ${feetToMeter} meter${feetToMeter < 1 || feetToMeter > 1 ? 's' : ''}`
}

//converts liters to gallons/gallons to liters
function volumeConversion() {
    let literToGallon = (num * .264).toFixed(3)
    let gallonToLiter = (num * 3.78541).toFixed(3)
    volumeEl.textContent = `${num} liter${num > 1 || num < 1 ? 's' : ''} 
                            = ${literToGallon} gallon${literToGallon > 1 || literToGallon < 1 ? 's' : ''}
                            | ${num} gallon${num > 1 || num < 1 ? 's' : ''} 
                            = ${gallonToLiter} liter${gallonToLiter > 1 || gallonToLiter < 1 ? 's' : ''}`
}

//converts kilos to pounds/pounds to kilos
function massConversion() {
    let kiloToPound = (num * 2.204).toFixed(3)
    let poundToKilo = (num * .453592).toFixed(3)
    massEl.textContent = `${num} kilo${num > 1 || num < 1 ? 's' : ''}
                          = ${kiloToPound} pound${kiloToPound > 1 || kiloToPound < 1 ? 's' : ''}
                          | ${num} pound${num > 1 || num < 1 ? 's' : ''}
                          = ${poundToKilo} kilo${poundToKilo > 1 || poundToKilo < 1 ? 's' : ''}`
}