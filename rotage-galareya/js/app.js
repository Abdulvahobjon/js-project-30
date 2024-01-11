let imagesContainer = document.querySelector('.images-container')
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')


let x  = 0

prev.addEventListener('click' , function(){
  x= x+45
  rotate()
})
next.addEventListener('click' , function(){
  x= x-45
  rotate()
})

function rotate(){
  imagesContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
}