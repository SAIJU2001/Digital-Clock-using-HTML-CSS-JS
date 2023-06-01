function clock()
{
    let seconds = document.getElementById('seconds');
    let minutes = document.getElementById('minutes');
    let hours = document.getElementById('hours');

    let sec = new Date().getSeconds();
    let min = new Date().getMinutes();
    let ho = new Date().getHours();
    var am = 'AM';

    if(ho>12)
    {
        ho=ho-12;
        var am='PM';
    }

    ho = (ho<10) ? '0'+ho : ho;
    min = (min<10) ? '0'+min : min;
    sec = (sec<10) ? '0'+sec : sec;

    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    hours.innerHTML = ho;
    ampm.innerHTML = am;    
};

let interval = setInterval(clock, 1000);
