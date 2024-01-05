let text = document.querySelector("textarea")
let btn  = document.querySelector('a')
let input =  document.querySelector('input')

btn.addEventListener('click' , function(){
  let file  = new Blob([text.value] , {type: "text/plain"})
  btn.download = input.value ? input.value : "documant"
  btn.href = URL.createObjectURL(file)
  window.location.reload()
})