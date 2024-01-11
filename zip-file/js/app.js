
let btn  = document.querySelector('#btn')
let input = document.querySelector('input')
let span  = document.querySelector('span')
let label  = document.querySelector('span')

input.addEventListener('change' , function(){
    if(input.files.length > 0){
        span.textContent = input.files.length  + " " + "ta file bor"
    } else{
        span.textContent = "file yoq"
    }
})
btn.addEventListener('click' , function(){
    let zip = new JSZip()
    for (var i = 0; i < input.files.length; i++) {
        var file = input.files[i];
        zip.file(file.name, file);
    }
    zip.generateAsync({type:"blob"})
    .then(function(info){
        saveAs(info , "info.zip")
    })
})