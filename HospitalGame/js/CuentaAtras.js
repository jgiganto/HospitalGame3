var interval1; var interval2; var interval3; var a; var b; var c;
a = false; b = false; c = false;
var drop = "<div id='droppable' class='ui-widget-header'> <p>Drop here</p > </div >"; 


function countdown(element, minutes, seconds) {
    // Fetch the display element
    var el = document.getElementById(element);
    // Set the timer
    if (element == 'countdown1') {

        interval1 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    (el.innerHTML = "STOP!");//AQUI SE EJECUTA CÓDIGO CUANDO FINALIZA LA CUENTA ATRAS 
                    $("#dinamico").html(drop);
                    arrastrar();
                    clearInterval(interval1);
                   
                    //$("#timer1").click();
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }

            if (minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }

            var second_text = seconds > 1 ? '' : '';

            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
            seconds--;
        }, 1000);
    }
    if (element == 'countdown2') {

        interval2 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    (el.innerHTML = "STOP!");//AQUI SE EJECUTA ALGO CUANDO FINALIZA LA CUENTA ATRAS                
                    clearInterval(interval2); //22:00 Jesús hay que hacer una variable interval por cada reloj captura con un if quien llego
                    // a cero y que llame a countdown
                    //alert("dentro");  
                    //b = true;
                    //clickbutton(a, b, c)
                    $("#timer2").click();
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }

            if (minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }

            var second_text = seconds > 1 ? '' : '';

            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
            seconds--;
        }, 1000);
    }
    if (element == 'countdown3') {

        interval3 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    (el.innerHTML = "STOP!");//AQUI SE EJECUTA ALGO CUANDO FINALIZA LA CUENTA ATRAS                
                    clearInterval(interval3); //22:00 Jesús hay que hacer una variable interval por cada reloj captura con un if quien llego
                    // a cero y que llame a countdown
                    //alert("dentro");  
                    //c = true;
                    //clickbutton(a, b, c)
                    $("#timer3").click();
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }

            if (minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }

            var second_text = seconds > 1 ? '' : '';

            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
            seconds--;
        }, 1000);
    }
   
}