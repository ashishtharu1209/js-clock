function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
     var session=document.getElementById('ampm')
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    var dateTime = new Date();
    var year=dateTime.getFullYear();
    var month=dateTime.getMonth()+1;
    var day=dateTime.getDate();
    document.getElementById('year').innerHTML = year;
    document.getElementById('month').innerHTML = month;
    document.getElementById('day').innerHTML = day;


if(hrs>=12){
    session.innerHTML="PM"
}else{
    session.innerHTML="AM"
}
}
setInterval(displayTime);


