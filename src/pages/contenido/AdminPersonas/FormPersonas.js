import React, { useEffect, useState } from "react";
import Axios from "../../../services/Axios";
import { useNavigate, useParams } from "react-router-dom";

export function FormPersonas() {
  const variables = {
    _id: "",
    curp: "",
    nombre: "",
    apellidos: "",
    fechana: "",
    sexo: "",
    telefono: "",
    email: "",
  };

  const [personas, setPersonas] = useState(variables);
  const params = useParams();
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setPersonas({...personas, [name]: value });
  };

  const GuardarDatos = async (e) => {
    //const formulario=document.getElementById("personales");
    //const formData=new FormData(formulario);
    await Axios.post("/guardarPersona", {
      curp: personas.curp,
      nombre: personas.nombre,
      apellidos: personas.apellidos,
      fechana: personas.fechana,
      sexo: personas.sexo,
      telefono: personas.telefono,
      email: personas.email,
    }).then(() => {
      console.log("Registros guardados");
    });
    console.log(personas);
  };

  const consultarUnaPersona = async (id) => {
    const buscarUno = await Axios.get("/unaPersona/" + id);
    setPersonas(buscarUno.data);
  };

  const actualizarPersonas = async () => {
    await Axios.put(`/unPersonas/${params.id}`).then(() => {
      console.log("Se actualizo los datos");
    });
    navigate("/");
  };

  const Enviar = (e) => {
    e.preventDefault();
    if (personas._id === "") {
      GuardarDatos();
    } else {
      actualizarPersonas();
    }
  };

  useEffect(() => {
    consultarUnaPersona(params.id);
  }, [params.id]);

  return (
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header">Datos personales</div>
        <div class="card-body">
          <form class="row g-3 p-2" onSubmit={Enviar} id="personales">
            <div class="mb-3 row">
              <label for="curp" class="col-sm-2 col-form-label">
                Curp
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  name="curp"
                  class="form-control"
                  id="curp"
                  placeholder="Ingresa la matricula"
                  value={personas.curp}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="nombre" class="col-sm-2 col-form-label">
                Nombre
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingresa tu nombre"
                  value={personas.nombre}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="apellidos" class="col-sm-2 col-form-label">
                Apellidos
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="apellidos"
                  id="apellidos"
                  placeholder="Ingresa los apellidos"
                  value={personas.apellidos}
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Teléfono
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="Ingresa tu numero de telefono"
                  value={personas.telefono}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <select 
              class="form-select" 
              aria-label="Default select example"
              name="sexo"
              value={personas.sexo}
              onChange={onChange}>
                <option disabled selected value="" >Sexo</option>
                <option>Femenino</option>
                <option>Masculino</option>
              </select>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
