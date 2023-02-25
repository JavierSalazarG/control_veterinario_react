const Paciente = ({ paciente, _setPaciente, eliminarPaciente }) => {
  const {
    nombre,
    microchip,
    nombrePropietario,
    telefono,
    correo,
    fecha,
    motivoIngreso,
    id,
  } = paciente;

  return (
    <div className="m-5 bg-white shadow-sm px-5 py-10 rounded-md">
      <p className="font-bold mb-3 text-blue-900 uppercase">
        - Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-blue-900 uppercase">
        - Microchip:{" "}
        <span className="font-normal normal-case">{microchip}</span>
      </p>
      <p className="font-bold mb-3 text-blue-900 uppercase">
        - Propietario:{" "}
        <span className="font-normal normal-case">{nombrePropietario}</span>
      </p>
      <p className="font-bold mb-3 text-blue-900 uppercase">
        - Numero telefono:{" "}
        <span className="font-normal normal-case">{telefono}</span>
      </p>
      <p className="font-bold mb-3 text-blue-900 uppercase">
        - Correo: <span className="font-normal normal-case">{correo}</span>
      </p>
      <p className="font-bold mb-3 text-blue-900 uppercase">
        - Fecha de Alta:{" "}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-blue-900 uppercase">
        - Motivo de ingreso:{" "}
        <span className="font-normal normal-case">{motivoIngreso}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          onClick={() => _setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          onClick={() => {
            eliminarPaciente(id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
export { Paciente };
