const h = document.querySelector('.hour')
const m = document.querySelector('.munite')
const s = document.querySelector('.second')



 const timeOutput = ()=>{
    
let time = new Date();
let hour = time.getHours()
let munite = time.getMinutes()
let second = time.getSeconds()

hour = (hour>12)? hour-12 : hour

hour =(hour<10)? "0"+ hour : hour;
munite =(munite<10)? "0"+ munite : munite;
second =(second<10)? "0"+ second : second;

 h.style.transform = `rotateZ(${hour*30+munite*0.5}deg)`
 m.style.transform = `rotateZ(${munite*6}deg)`
 s.style.transform = `rotateZ(${second*6}deg)`
 }

 setInterval(() => {
    timeOutput()
 }, 1000);