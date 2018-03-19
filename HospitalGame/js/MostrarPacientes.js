
function MostrarPacientes() {    
       $("#btnmostrar").click(function () {
            $("#divpacientes").load("/Juego/VistaParcial");
        });
}