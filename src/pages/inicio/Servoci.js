import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import { Link, useNavigate } from "react-router-dom";

export function Servoci() {
  const [programas, setProgramas] = useState([]);

  const navigate = useNavigate();

  const consultarProgramas = async () => {
    const consultar = await Axios.get("/programas");
    console.log(consultar.data);
    setProgramas(consultar.data);
  };

  const deleteProgramas = async (id) => {
    if (window.confirm("¿Esta seguro de eliminar el programa?")) {
      const eliminar = await Axios.delete("/programa/" + id);
    }
    consultarProgramas();
  };

  useEffect(() => {
    consultarProgramas();
  }, []);

  return (
    <div className="row">
      {programas.map((programa) => {
        return (
          <div className="col-4 p-2">
            <div class="card mb-3" style={{}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2_WzvrB69jQfuBh4FbPy14qKKlsBUQ529g&usqp=CAU"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{programa.nombre}</h5>
                    
                    <div
                      class="accordion accordion-flush"
                      id="/"
                    >
                      <div class="accordion-item">
                        <h2 class="accordion-header">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="/"
                          >
                            Descripcion de servicio
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          class="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="accordion-body">$ 
                            {programa.apellidos} pesos
                          <p class="card-text">{programa.telefono}</p>
                          <p class="card-text">
                            <small class="text-muted">{programa.sexo}</small>
                          </p>
                          <p class="card-text">Fecha de reserva: {programa.fecha}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-8">
              <td>
                <button 
                type="button" 
                class="btn btn-warning"
                onClick={() => navigate(`/contratar/${programa._id}`)}
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => deleteProgramas(programa._id)}
                >
                  Cancelar
                </button>
              </td>
            </div>
          </div>
        );
      })}
    </div>
  );
}
