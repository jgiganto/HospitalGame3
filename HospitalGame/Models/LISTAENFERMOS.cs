//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HospitalGame.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class LISTAENFERMOS
    {
        public int IDCaso { get; set; }
        public Nullable<int> IDPaciente { get; set; }
        public Nullable<int> IDEnfermedad { get; set; }
        public string Enfermedad { get; set; }
    
        public virtual ENFERMEDADES ENFERMEDADES { get; set; }
        public virtual PACIENTES PACIENTES { get; set; }
    }
}
