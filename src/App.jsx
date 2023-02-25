import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario.jsx";
import { ListaPacientes } from "./components/ListaPacientes";
import "./App.css";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };

  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem("pacientes"));
    pacientesLocal?.length > 0 && setPacientes(pacientesLocal);
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-20 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
        />
        <ListaPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
