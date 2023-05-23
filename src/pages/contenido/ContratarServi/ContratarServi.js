import React, { useEffect, useState } from "react";
import Axios from "../../../services/Axios";
import { Link, useParams, useNavigate } from "react-router-dom";

export function ContratarServi() {
  const variables = {
    _id:"",
    nombre: "",
    apellidos: "",
    sexo: "",
    telefono: "",
    fecha:""
  };

  const [programas, setProgramas] = useState(variables);
  const params = useParams();
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setProgramas({ ...programas, [name]: value });
  };

  const GuardarDatos = async () => {
    //const formulario=document.getElementById("personales");
    //const formData=new FormData(formulario);
    await Axios.post("/programa", {
      nombre: programas.nombre,
      apellidos: programas.apellidos,
      sexo: programas.sexo,
      telefono: programas.telefono,
      fecha:programas.fecha
    }).then(() => {
      console.log("Registros guardados");
    });
    console.log(programas);
  };

  const consultarUnPrograma = async (id) =>{
    const buscarUno = await  Axios.get("/unProgramas/" + id);
    setProgramas(buscarUno.data);
  }

  const actualizarPrograma = async () =>{
    await Axios.put(`/programa/${params.id}`, programas).then(()=>{
      console.log("Se actualizaron los datos")
    });
    navigate("/servocen")
  }

  const Enviar = (e) => {
    e.preventDefault();
    if (programas._id === "") {
      GuardarDatos();
    } else {
      actualizarPrograma();
    }
  };

  useEffect(()=>{
    consultarUnPrograma(params.id);
  }, [params.id]);
  return (
    <div className="container-fluid p-3">
      <div class="card">
        <div class="card-header">Confirmar tu solicitud de servicio</div>
        <div class="card-body">
          <form class="row g-3 p-2" onSubmit={Enviar} id="personales">
            <div class="mb-3 row">
              <label for="nombre" class="col-sm-2 col-form-label">
                Nombre de servicio
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Tu servicio es"
                  value={programas.nombre}
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="apellidos" class="col-sm-2 col-form-label">
                Precio
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  name="apellidos"
                  id="apellidos"
                  placeholder="Tu sercicio cuesta"
                  value={programas.apellidos}
                  onChange={onChange}
                />
              </div>
            </div>
            
            <div class="mb-3 row">
              <label for="telefono" class="col-sm-2 col-form-label">
                Fecha de reserva
              </label>
              <div class="col-sm-10">
                <input
                  type="date"
                  class="form-control"
                  name="fecha"
                  id="telefono"
                  placeholder="Seleciona el mes de tu cita"
                  value={programas.fecha}
                  onChange={onChange}
                />

                </div>
              </div>
            

            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Aceptar
              </button>
            </div>
            <div class="col-12">
              <Link class="btn btn-primary" type="submit" to="/tipos">
                Regresar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
