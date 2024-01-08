
let btn  = document.querySelector('#btn')
let input = document.querySelector('input')

btn.addEventListener('click' , function(){
    const file  = input.files
    console.log(file);
})