using System;
using System.Collections.Generic;
using System.Data.Objects;
using System.Linq;
using System.Web;


#region Procedimientos_almacenados
/* CREATE PROCEDURE INSERTARPACIENTES
 (@IDPaciente INT,@Nombre NVARCHAR(20),@Apellido NVARCHAR(20),
 @Edad INT,@Reloj INT,@IDEnfermedad INT,@Baja NVARCHAR(20),@Eliminado NVARCHAR(20))
 AS 
 INSERT INTO PACIENTES (IDPaciente,Nombre,Apellido,Edad,Reloj,IDEnfermedad,Baja,Eliminado) 
VALUES (@IDPaciente,@Nombre,@Apellido,@Edad,@Reloj,@IDEnfermedad,@Baja,@Eliminado)
GO
EXEC INSERTARPACIENTES 3,'Dizzy','Gillespie','55','60',3,'no','no'*/
#endregion
namespace HospitalGame.Models
{
    public class ModeloGame
    {
        ContextoHospitalGame contexto;
        public ModeloGame()
        {
            this.contexto = new ContextoHospitalGame();
        }
        public  void InsertarPacientes(int IDPaciente, String Nombre, String Apellido, int Edad, int Reloj,
          int IDEnfermedad, String Baja, String Eliminado)
        {
            
                contexto.INSERTARPACIENTES(IDPaciente, Nombre, Apellido, Edad, Reloj, IDEnfermedad, Baja, Eliminado);
            
             
        }
        public List<String> GetPacientes()
        {
            var consulta = from datos in contexto.PACIENTES
                           select datos.Apellido;
            return consulta.ToList();
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
