import React, { useState } from "react";
import Axios from "../../../services/Axios";
import { Link } from "react-router-dom";

export function Prueba() {
  const variables = {
    _id:"",
    curp: "",
    nombre: "",
    apellidos: "",
    sexo: "",
    telefono: "",
    
    email:""
  };
  const [personas, setPersonas] = useState(variables);

  const onChange = (e) => {
    const { name, value } = e.target;
    setPersonas({ ...personas, [name]: value });
  };

  const GuardarDatos = async () => {
    //const formulario=document.getElementById("personales");
    //const formData=new FormData(formulario);
    await Axios.post("/guardarPersona", personas).then(() => {
      console.log("Registros guardados");
    });
  };
  const Enviar = (e) => {
    e.preventDefault();
    GuardarDatos();
  };

  return (
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header">Confirmar Aceptacion de Servicio</div>
        <div class="card-body">
          <form role="form" onSubmit={Enviar}>
            <div class="form-group">
              <label for="text">Curp</label>
              <input 
              name="curp"
              value={personas.curp}
              onChange={onChange}
              type="text" 
              class="form-control" 
              id="curp" />
            </div>
            <div class="form-group">
              <label for="text">Nombre</label>
              <input
              name="nombre"
              value={personas.nombre} 
              onChange={onChange}
              type="text" 
              class="form-control" 
              id="nombre" />
            </div>
            <div class="form-group">
              <label for="text">Apellidos</label>
              <input
              name="apellidos"
              value={personas.apellidos} 
              onChange={onChange}
              type="text" 
              class="form-control" 
              id="apellidos" />
            </div>
            <div class="form-group">
              <label for="text">Sexo</label>
              <input
              name="sexo"
              value={personas.sexo} 
              onChange={onChange}
              type="text" 
              class="form-control" 
              id="apellidos" />
            </div>
            <div class="form-group">
              <label for="text">Telefono</label>
              <input
              name="telefono"
              value={personas.telefono} 
              onChange={onChange}
              type="text" 
              class="form-control" 
              id="apellidos" />
            </div>
            <div class="form-group">
              <label for="Email">Email</label>
              <input
              name="email"
              value={personas.email} 
              onChange={onChange}
              type="text" 
              class="form-control" 
              id="apellidos" />
            </div>
            

            <button type="submit" class="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
