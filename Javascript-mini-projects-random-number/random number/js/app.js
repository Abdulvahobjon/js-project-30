// dom elementlarini tanlash 
let randomNumberBtn = document.querySelector(".random-number-btn")
let randomNumberText = document.querySelector(".random-number-text")
let randomNumberCopy = document.querySelector(".random-number-copy")

// random number
function generateRamdomNumber(){
  let numLength  = 8;
  let randomNum  = Math.floor(Math.random()*10**numLength)
  randomNumberText.textContent = randomNum
}

// copy text 
function copyRandamNumber(){
  navigator.clipboard.writeText(randomNumberText.textContent)
  .then(item => console.log("clipboardga malumot nushalandi:" + randomNumberText.textContent)).catch(err => console.error("clipboardga malumot nushalashda xoto bor" ,err))
}

randomNumberBtn.addEventListener('click' , generateRamdomNumber)

randomNumberCopy.addEventListener('click' , copyRandamNumber)