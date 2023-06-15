let billTotalInput = document.getElementById('billtotal')
let tipInput = document.getElementById('tipInput')
let numberOfPeople = document.getElementById('noofpeople')
let perPersonTotal = document.getElementById('perpersontotal')
let numpeople = numberOfPeople.innerText

let adding = document.getElementById('adding')
//adding
//subing
const calculateBill = () => {
  let bill = Number(billTotalInput.value)
  //console.log(bill)
  let tip = Number(tipInput.value)/100
  //console.log(tip)
  let result=((bill*tip) + bill)/numpeople
  

  perPersonTotal.innerText = `$${result.toLocaleString('en-US')}`
}


const increasePeople = () => {
  numpeople=Number(numpeople)+1
  numberOfPeople.innerText = numpeople
  calculateBill()
}














billTotalInput.onkeyup = () => calculateBill()
tipInput.onkeyup = () => calculateBill()
adding.onclick = () => increasePeople()