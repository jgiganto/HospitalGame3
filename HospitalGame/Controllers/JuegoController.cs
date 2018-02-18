using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using static System.Net.Mime.MediaTypeNames;
using System.Text;
using HospitalGame.Models;
using System.Web.Services.Description;
 



namespace HospitalGame.Controllers
{
    public class JuegoController : Controller
    {
        ModeloGame modelo;
        public JuegoController()
        {
            modelo = new ModeloGame();
        }
        // GET: Juego
        public ActionResult Inicio()
        {
      

            return View();
        }
        [HttpPost]
        public ActionResult Inicio(int IDPaciente, String Nombre, String Apellido, int Edad, int Reloj,
          int IDEnfermedad, String Baja, String Eliminado)
        {            
            //ViewBag.saludo = saludo;
            //ViewBag.controlador = "He entrado al controlador " + saludo;

            //INSERTAR PACIENTE
            
                modelo.InsertarPacientes(IDPaciente, Nombre, Apellido,Edad, Reloj,IDEnfermedad, Baja, Eliminado);
                       
            return View( );

        }

        public ActionResult pruebas()
        {
            return View();
        }
        


    }
}

/*      public int IDPaciente { get; set; }
        public String Nombre { get; set; }
        public String Apellido { get; set; }
        public int Edad { get; set; }
        public int Reloj { get; set; }
        public int IDEnfermedad { get; set; }
        public String Baja { get; set; }
        public String Eliminado { get; set; }*/
