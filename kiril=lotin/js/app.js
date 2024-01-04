var letterRUS_UZB = {
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'yo',
  'ж': 'j',
  'з': 'z',
  'и': 'i',
  'й': 'y',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'x',
  'ц': 'ts',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'shch',
  'ъ': 'ʺ',
  'ы': 'i',
  'ь': 'ʹ',
  'э': 'e',
  'ю': 'yu',
  'я': 'ya',
  'А': 'A',
  'Б': 'B',
  'В': 'V',
  'Г': 'G',
  'Д': 'D',
  'Е': 'E',
  'Ё': 'Yo',
  'Ж': 'J',
  'З': 'Z',
  'И': 'I',
  'Й': 'Y',
  'К': 'K',
  'Л': 'L',
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',
  'У': 'U',
  'Ф': 'F',
  'Х': 'X',
  'Ц': 'Ts',
  'Ч': 'Ch',
  'Ш': 'Sh',
  'Щ': 'Shch',
  'Ъ': 'ʺ',
  'Ы': 'I',
  'Ь': 'ʹ',
  'Э': 'E',
  'Ю': 'Yu',
  'Я': 'Ya',
   'ғ':'g\'',
   'ў': 'o\'',
   'Ў': 'O\'',
    'қ':'q',
};

let input  =  document.querySelector('#input')
let output  =  document.querySelector('#output')
let btn  = document.querySelector('.btn')
let clear  = document.querySelector('.clear')

clear.addEventListener('click' , function(){
  input.value = ""
  output.value = ""
})

btn.addEventListener('click' , function(){
  let outputText = ''
  for(let i = 0; i < input.value.length; i++){
    let letter = input.value[i]
    if(letterRUS_UZB[letter]){
      outputText = outputText + letterRUS_UZB[letter]
    } else{
      outputText = outputText + letter
    }
  }
  output.value = outputText
})

