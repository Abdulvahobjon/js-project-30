var nouns = [
  'We live in a small town', 'year', 'people', 'way', 'day', 'man', 'thing', 'woman', 'life',
  'He is an excellent singer.', 'world', 'school', 'state', 'family', 'student', 'group', 'country',
  'problem', 'hand', 'part', 'place', 'case', 'week', 'company', 'system',
  'program', 'question', 'work', 'government', 'number', 'night', 'point',
  'home', 'water', 'room', 'mother', 'area', 'money', 'story', 'fact',
  'month', 'lot', 'right', 'study', 'book', 'eye', 'job', 'word', 'business',
  'issue', 'side', 'kind', 'head', 'house', 'service', 'friend', 'father',
  'power', 'hour', 'game', 'line', 'end', 'member', 'law', 'car', 'city',
  'community', 'name', 'president', 'team', 'minute', 'idea', 'kid', 'body',
  'information', 'back', 'parent', 'face', 'others', 'level', 'office', 'door',
  'health', 'person', 'art', 'war', 'history', 'party', 'result', 'change',
  'morning', 'reason', 'research', 'girl', 'guy', 'moment', 'air', 'teacher',
  'force', 'education'
];

let list = document.querySelector(".list");
nouns.map((element, index) => {
  let item = document.createElement("li");
  item.classList.add("item")
  item.innerHTML = ` <span class="item-speak-text">${element}</span>
    <button class="item-speak"><i class="fa-solid fa-microphone-lines"></i></button>
    <button class="item-speak-pause"><i class="fa-solid fa-microphone-lines-slash"></i></button>`;

  list.appendChild(item);

});

let SpeakBtn =document.querySelectorAll(".item-speak")
let SpeakBtnPause =document.querySelectorAll(".item-speak-pause")
let SpeakWord =document.querySelectorAll(".item > span")
SpeakBtn.forEach((item ,index)=>{
  item.addEventListener('click' , function(){
    let woiseFast = document.querySelector(".woise-2 select")
    let woiseVolume = document.querySelector(".woise select")
    if("speechSynthesis" in window){
      let word  = new SpeechSynthesisUtterance(SpeakWord[index].textContent)
      word.leng = "en-US"
      word.volume = woiseVolume.value
      word.rate = woiseFast.value
      console.log(word);
      speechSynthesis.speak(word)
    } else{
      alert("sizda 'speechSynthesis' yoqligi uchun , ovoz ishlamayabdi!")
    }
  })
  SpeakBtnPause[index].addEventListener('click' , function(){
    if('speechSynthesis' in window){
      speechSynthesis.cancel()
    }
  })


})
