
var interval1; var interval2; var interval3; var a; var b; var c;
a = false; b = false; c = false; var num = 0; var nombre = "";
var x = ""; var y = ""; var datos = 0;
//var desplazamiento = ale




function countdown(element, minutes, seconds) {
    datos = Aleatorios(50);//2
    x = PosicionAleatoriaX(50, 750);
    y = PosicionAleatoriaY(150, 500);


    nombre = NombresDrop();
    var drop = "<div id=" + nombre + "' class='ui-widget-header' style='position:fixed;top:" + y + "px;left:" + x + "px'>";
    drop += "<p>" + datos + "</p><p>x:" + x + "y:" + y + "</p> </div>";
    // Fetch the display element
    var el = document.getElementById(element);
    // Set the timer
    if (element == 'countdown1') {

        interval1 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    clearInterval(interval1); //1
                    (el.innerHTML = "STOP!");//AQUI SE EJECUTA CÓDIGO CUANDO FINALIZA LA CUENTA ATRAS 

                    // $("#dinamico").append(drop);   
                    //$("div[id^='droppable']").fadeOut(EnfermoAleatorio(1500,4000), function () {
                    //    this.remove();
                    //});
                    //arrastrar();
                     $("#IDPaciente").val(datos);
                    $("#Nombre").val(datos);
                    $("#Apellido").val(datos);
                    $("#Edad").val(datos);
                    $("#Reloj").val(datos);
                    $("#IDEnfermedad").val(datos);
                    $("#Baja").val(datos);
                    $("#Eliminado").val(datos);  
                    $("#btnmostrar").click();//3 
                    $("#boton").click();//4//enviar asincrono     
                    $("#timer1").click();//5                   
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
        }, 500);
    }

    if (element == 'countdown2') {

        interval2 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    clearInterval(interval2); 
                    (el.innerHTML = "STOP!"); 
                    $("#dinamico").append(drop);
                    $("div[id^='droppable']").fadeOut(EnfermoAleatorio(6000, 10000), function () {
                        this.remove();
                    });
                    arrastrar();
                    $("#boton").click();
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
        }, 300);
    }
    if (element == 'countdown3') {

        interval3 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    (el.innerHTML = "STOP!");//AQUI SE EJECUTA ALGO CUANDO FINALIZA LA CUENTA ATRAS                
                    clearInterval(interval3); // 
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