function EnviarAsincrono() {
    $("#formulario").submit(function () {
        $.ajax({
            type: 'POST',
            url: ('Inicio'),
            data: $(this).serialize(),
            success: function (data) {
                //countdown('countdown1', 0, 5);                
                //sleep(1000);
                $("#boton").click();
            }
        })
        return false;
    });
}