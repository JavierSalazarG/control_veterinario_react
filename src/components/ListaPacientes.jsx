import React, { useState, useEffect } from "react";
import { Paciente } from "./paciente";

function ListaPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className=" font-black text-2xl text-center text-green-500">
            Lista pacientes
          </h2>
          <p className="font-bold text-lg mt-8 text-center mb-10">
            Administaccion pacientes
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              _setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className=" font-black text-2xl text-center text-green-500">
            Por ahora no tienes pacientes
          </h2>
          <p className="font-bold text-lg mt-8 text-center mb-10">
            Rellene el formulario para tener los datos
          </p>
        </>
      )}
    </div>
  );
}

export { ListaPacientes };
