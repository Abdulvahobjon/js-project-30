let bodye  = document.querySelector('body')
let box  = document.querySelector('.box')

let tepa = 0
let chap = 0
bodye.addEventListener('keydown' , function(e){
  console.log(e.keyCode);
    if(e.keyCode == 83 || e.keyCode == 40){
      tepa = tepa + 10
      box.style.top = tepa + 'px'
    }else if(e.keyCode == 87 || e.keyCode == 38){
      tepa = tepa - 10
      box.style.top = tepa + 'px'
    }else if(e.keyCode == 65 || e.keyCode == 37){
      chap = chap - 10
      box.style.left = chap + 'px'
    }else if(e.keyCode == 68 || e.keyCode == 39){
      chap = chap + 10
      box.style.left = chap + 'px'
    }
})
