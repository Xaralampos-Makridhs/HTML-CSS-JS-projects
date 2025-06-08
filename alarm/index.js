const clock=document.getElementById('clock');
const sound=document.getElementById('sound');

const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');

let alarmtime=null;

function update(){
  const now=new Date();
  const h=now.getHours().toString().padStart(2, "0");
  const m=now.getMinutes().toString().padStart(2,"0");
  const s=now.getSeconds().toString().padStart(2,"0");
  
  if(alarmtime===`${h}:${m}`){
    sound.play();
  }

  clock.textContent=`${h}:${m}:${s}`;
}

setInterval(update,1000);//1000ms=1s, realistic time

function populateselect(){
  for(let i=0;i<24;i++){
    const option=document.createElement('option');
    option.value=option.textContent=i.toString().padStart(2, "0");
    hours.appendChild(option);
  }

  for (let i = 0; i < 60; i++) {
    const option = document.createElement('option');
    option.value = option.textContent = i.toString().padStart(2, "0");
    minutes.appendChild(option);
  }
}

populateselect();

function setAlarm(){
  const h=document.getElementById('hours').value;
  const m=document.getElementById('minutes').value;

  alarmtime=`${h}:${m}`;

  alert("Alarm set at: "+ alarmtime);
}

function clearAlarm(){
  alarmtime=null;
  alert("Alarm cancelled")
}