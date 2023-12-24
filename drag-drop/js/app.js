let col = document.querySelectorAll(".col")
let img = document.querySelector(".images")

col.forEach(function(item, index){
  item.addEventListener('dragover' , function(e){
      e.preventDefault()
      console.log(item);
      item.classList.add('hoverAdd')
  })

  item.addEventListener('dragleave' , function(){
    item.classList.remove('hoverAdd')
  })


  item.addEventListener("drop" , function(){
    item.appendChild(img)
  })

})