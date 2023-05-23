import React, { useState, useEffect } from "react";
import Axios from "../../services/Axios";
import { Link } from "react-router-dom";

export function Home() {
  const [personas, setPersonas] = useState([]);
  const consultarPersonas = async () => {
    const consultar = await Axios.get("/personas");
    console.log(consultar.data);
    setPersonas(consultar.data);
  };

  useEffect(() => {
    consultarPersonas();
  }, []);

  return (
    <div className="row">
      {personas.map((persona) => {
        return (
          <div className="col-4 p-2">
            <div class="card mb-3" style={{}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jvo13VhSfAGtdAUYVbcRco2WN9Uu8WXhQA&usqp=CAU" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{persona.nombre} {persona.apellidos}</h5>
                    <p class="card-text">
                      {persona.telefono}
                    </p>
                    <p class="card-text">
                      <small class="text-muted">{persona.sexo}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link type="button" class="btn btn-success" to="/persona">ver...</Link>

          </div>
        );
      })}
    </div>
  );
}
