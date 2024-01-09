
let btn  = document.querySelector('#btn')
let input = document.querySelector('input')

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