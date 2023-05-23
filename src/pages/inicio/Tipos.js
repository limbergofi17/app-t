import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import { Link } from "react-router-dom";

export function Tipos() {
  const [programes, setProgrames] = useState([]);
  const consultarProgrames = async () => {
    const consultar = await Axios.get("/programes");
    console.log(consultar.data);
    setProgrames(consultar.data);
  };

  useEffect(() => {
    consultarProgrames();
  }, []);

  return (
    <div className="row">
      {programes.map((programe) => {
        return (
          <div className="col-4 p-2">
            <div class="card mb-3" style={{}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2_WzvrB69jQfuBh4FbPy14qKKlsBUQ529g&usqp=CAU" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{programe.nombre}</h5>
                    <p class="card-text">
                      $ {programe.telefono} Pesos.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">{programe.sexo}.</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link type="button" class="btn btn-warning" to="/contratar">Reservar</Link>
          </div>
        );
      })}
    </div>
  );
}