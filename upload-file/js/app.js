let btnDownload  = document.querySelector(".box input")
let img  = document.querySelector(".box-img")

btnDownload.addEventListener('change' , function(){
  let reader = new FileReader()
  reader.readAsDataURL(btnDownload.files[0])
  reader.onload = function(){
    img.setAttribute("src" , reader.result)
    // img.src = reader.result
  }
})