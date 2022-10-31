//how to create a 2 minute countdown stopwatch? 
var timeoutHandle;
function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        var counter = document.getElementById("timer");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            
            timeoutHandle=setTimeout(tick, 1000);
             
        } else {

            if(mins > 1){

            // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
               setTimeout(function () { countdown(mins - 1); }, 1000);
              

            }
             document.getElementById("timer").innerHTML = "Finished"
             document.getElementById("timer").style.fontSize = "40px";
            //  document.getElementById("timer").style.color = 'red';
            document.getElementById("timer").style.fontWeight = 'bold';
            
            document.getElementById('top-bar').style.background= 'rgb(2,0,36)';
            document.getElementById('top-bar').style.background= 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(121,9,79,1) 35%, rgba(255,0,56,1) 100%)';
        }
    }
    tick();

}











   

