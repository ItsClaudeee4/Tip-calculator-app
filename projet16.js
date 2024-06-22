const price = document.getElementById("price")
const error = document.getElementById("error")
const reset = document.getElementById("reset")
const TipAmount = document.getElementById("TipAmount")
const TotalPerson = document.getElementById("TotalPerson")
const numberPeople = document.getElementById("numberPeople")
const customTip = document.getElementById("customTip")
const tipPercent = document.querySelectorAll("#tipPercent")
let clicked = false
for (let i = 0; i < tipPercent.length; i++) {
    tipPercent[0].value = 5
    tipPercent[1].value = 10
    tipPercent[2].value = 15
    tipPercent[3].value = 25
    tipPercent[4].value = 50
    
    tipPercent[i].addEventListener("click", () => {
        tipPercent[i]
          let x  =  tipPercent[i].value * parseInt(price.value)
          let y = x / 100
          let z = parseInt(price.value) + y
          let e = z / parseInt(numberPeople.value) 
          let r = y / parseInt(numberPeople.value) 
          clicked = true    

         
         if ( clicked === true & price.value.length > 0 & numberPeople.value === "") {
            error.classList.remove("hidden")
            numberPeople.style.border = "solid 1px red"
         }else if ( clicked === true & price.value.length > 0 & numberPeople.value.length > 0) {
            TipAmount.innerHTML = r.toFixed(2)
            TotalPerson.innerHTML = e.toFixed(2)
             error.classList.add("hidden")
            numberPeople.style.border = "none"
         }
         
})}
function focus() {
    TipAmount.innerHTML = "$0.00"
    TotalPerson.innerHTML = "$0.00"
    console.log(2)
}

customTip.addEventListener("input" , () => {
    let x  =  customTip.value * parseInt(price.value)
    let y = x / 100
    let z = parseInt(price.value) + y
    let e = z / parseInt(numberPeople.value) 
    let r = y / parseInt(numberPeople.value) 
    clicked = false
    if (  price.value.length > 0 & numberPeople.value === "") {
        error.classList.remove("hidden")
        numberPeople.style.border = "solid 1px red"
     }
     if (  price.value.length > 0 & numberPeople.value.length > 0) {
        TipAmount.innerHTML = r.toFixed(2)
        TotalPerson.innerHTML = e.toFixed(2)
         error.classList.add("hidden")
        numberPeople.style.border = "none"
     }  
     if (customTip.value === "" || customTip.value === "0") {
        TipAmount.innerHTML = "$0.00"
        TotalPerson.innerHTML ="$0.00"
     }
})

price.addEventListener("input" , () => {
    let x  =  customTip.value * parseInt(price.value)
    let y = x / 100
    let z = parseInt(price.value) + y
    let e = z / parseInt(numberPeople.value) 
    let r = y / parseInt(numberPeople.value) 
    clicked = false
     if (  price.value.length > 0 & numberPeople.value.length > 0) {
        TipAmount.innerHTML = r.toFixed(2)
        TotalPerson.innerHTML = e.toFixed(2)
         error.classList.add("hidden")
        numberPeople.style.border = "none"
     }  
     if (customTip.value === "" || customTip.value === "0") {
        TipAmount.innerHTML = "$0.00"
        TotalPerson.innerHTML ="$0.00"
     }
})

numberPeople.addEventListener("input" , () => {
    let x  =  customTip.value * parseInt(price.value)
    let y = x / 100
    let z = parseInt(price.value) + y
    let e = z / parseInt(numberPeople.value) 
    let r = y / parseInt(numberPeople.value) 
    clicked = false
    if (  price.value.length > 0 & numberPeople.value === "") {
        error.classList.remove("hidden")
        numberPeople.style.border = "solid 1px red"
     }
     if (  price.value.length > 0 & numberPeople.value.length > 0) {
        TipAmount.innerHTML = r.toFixed(2)
        TotalPerson.innerHTML = e.toFixed(2)
         error.classList.add("hidden")
        numberPeople.style.border = "none"
     }  
     if (customTip.value === "" || customTip.value === "0") {
        TipAmount.innerHTML = "$0.00"
        TotalPerson.innerHTML ="$0.00"
     }
  
})

reset.addEventListener("click", () => {


      TipAmount.innerHTML = "$0.00"
      TotalPerson.innerHTML ="$0.00"
      price.value = ""
      numberPeople.value  =  ""
      customTip.value = ""
    
})

  







