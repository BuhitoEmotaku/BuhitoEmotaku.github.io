function clockMode() {

        var dateTime = new Date();
        var hours = dateTime.getHours();
        var mins = dateTime.getMinutes();
        var secs = dateTime.getSeconds();

        var session = document.getElementById('session');
        

        if (mins <10){
            mins = '0' + mins;
        }   
        if (secs <10){
            secs = '0' + secs;
        }

        if (hours <13){
            session.innerHTML = 'AM';
        }
        else{
            session.innerHTML = 'PM';
        }
        
        document.getElementById('hour').innerHTML = hours;
        document.getElementById('min').innerHTML = mins;
        document.getElementById('sec').innerHTML = secs;
}
setInterval(clockMode, 10)