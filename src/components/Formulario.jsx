import React, { useState, useEffect } from "react";
import { Error } from "./Error";

function Formulario({ pacientes, setPacientes, paciente }) {
  const [nombre, setNombre] = useState("");
  const [microchip, setMicrochip] = useState("");
  const [nombrePropietario, setnombrePropietario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha, setFecha] = useState("");
  const [motivoIngreso, setMotivoIngreso] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setMicrochip(paciente.microchip);
      setnombrePropietario(paciente.nombrePropietario);
      setTelefono(paciente.telefono);
      setCorreo(paciente.correo);
      setFecha(paciente.fecha);
      setMotivoIngreso(paciente.motivoIngreso);
    }
  }, [paciente]);

  const generarId = () => {
    var d = new Date().getTime();
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion
    if (
      [
        nombre,
        microchip,
        nombrePropietario,
        telefono,
        correo,
        fecha,
        motivoIngreso,
      ].includes("")
    ) {
      console.log("rellene todos los campos");
      setError(true);
      return;
    }
    setError(false);

    //objeto paciente
    const objetoPaciente = {
      nombre,
      microchip,
      nombrePropietario,
      telefono,
      correo,
      fecha,
      motivoIngreso,
    };

    if (paciente.id) {
      objetoPaciente.id = paciente.id;

      const pacienteActualizado = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacienteActualizado);
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reinicio formulario
    setNombre("");
    setMicrochip("");
    setnombrePropietario("");
    setTelefono("");
    setCorreo("");
    setFecha("");
    setMotivoIngreso("");
  };
  return (
    <div className="md:w-1/2 lg:w2/5 ">
      <h2 className="font-black text-2xl text-center text-blue-500">
        Seguimiento
      </h2>
      <p className="font-bold text-lg mt-8 text-center mb-10">
        rellene los datos del paciente
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white mx-5 shadow-sm rounded-md py-10 mb-20 px-5"
      >
        {error && (
          <Error>
            <p>Error al rellenar el formulario</p>
          </Error>
        )}
        <div className="mb-8">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="nombre"
            className="border-2 text-blue-900 border-gray-300 w-full p-2 mt-3 placeholder-blue-700 rounded-md"
            type="text"
            placeholder="nombre mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="microchip"
            className="block text-gray-700 uppercase font-bold"
          >
            Microchip
          </label>
          <input
            id="microchip"
            className="border-2 text-blue-900 border-gray-300 w-full p-2 mt-3 placeholder-blue-700 rounded-md"
            type="number"
            placeholder="microchip"
            value={microchip}
            onChange={(e) => setMicrochip(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="nombre-propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="nombre-propietario"
            className="border-2 text-blue-900 border-gray-300 w-full p-2 mt-3 placeholder-blue-700 rounded-md"
            type="text"
            placeholder="nombre Propietario"
            value={nombrePropietario}
            onChange={(e) => setnombrePropietario(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="num_telefono"
            className="block text-gray-700 uppercase font-bold"
          >
            Numero telefono
          </label>
          <input
            id="num_telefono"
            className="border-2 text-blue-900 border-gray-300 w-full p-2 mt-3 placeholder-blue-700 rounded-md"
            type="number"
            placeholder="Numero de telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Correo
          </label>
          <input
            id="email"
            className="border-2 text-blue-900 border-gray-300 w-full p-2 mt-3 placeholder-blue-700 rounded-md"
            type="email"
            placeholder="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            className="border-2 text-blue-900 border-gray-300 w-full p-2 mt-3  rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            motivo de ingreso
          </label>
          <textarea
            id="sintomas"
            className="border-2 text-blue-900 border-gray-300 w-full p-2 mt-3 placeholder-blue-700 rounded-md"
            placeholder="Describe los sintomas lo mas detallado posible"
            value={motivoIngreso}
            onChange={(e) => setMotivoIngreso(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 cursor-pointer w-full p-3 transition-all text-white uppercase font-bold"
          value={paciente.id ? "Guardar datos actualizado" : "Dar de alta"}
        />
      </form>
    </div>
  );
}

export { Formulario };
