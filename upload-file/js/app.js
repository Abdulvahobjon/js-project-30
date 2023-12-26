// inputni chaqirib olish 
let uploadInput  = document.querySelector(".box input")
// imgni chaqirib olish 
let img  = document.querySelector(".box-img")
// input change  bo'lgandagi holat 
uploadInput.addEventListener('change' , function(){
  //FileReader objectini yaratish
  let reader = new FileReader()
  //  fileni o'qishni boshlash 
  reader.readAsDataURL(uploadInput.files[0])
  // onload => fileni yuklanganidan so'ng chaqiradi 
  reader.onload = function(){
    // reader.result => filedan olingan malumot 
    // img srcsiga olingan file malumotini joylash
    img.setAttribute("src" , reader.result )
  }
})