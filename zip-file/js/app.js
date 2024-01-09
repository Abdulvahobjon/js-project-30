
let btn  = document.querySelector('#btn')
let input = document.querySelector('input')

btn.addEventListener('click' , function(){
    const files  = input.files
    let zip = new JSZip()
    files.forEach(element => {
        zip.file(element.name , element)
    });
    zip.generateAsync({type:"blob"})
    .then(function(info){
        saveAs(info , "info.zip")
    })
})