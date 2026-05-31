import React, { useEffect, useState } from "react";
import API from "../services/api";

function Evaluaciones() {
  const [evaluaciones, setEvaluaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nuevaEvaluacion, setNuevaEvaluacion] = useState({
    titulo: "",
    tipo: "diagnostica",
    descripcion: "",
  });

  // Cargar evaluaciones al iniciar
  useEffect(() => {
    const fetchEvaluaciones = async () => {
      try {
        const res = await API.get("/evaluaciones");
        console.log("Datos recibidos:", res.data); // 👀 Verifica en consola
        setEvaluaciones(res.data);
      } catch (err) {
        console.error("Error al obtener evaluaciones:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvaluaciones();
  }, []);

  const handleChange = (e) => {
    setNuevaEvaluacion({ ...nuevaEvaluacion, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (nuevaEvaluacion.id) {
        await API.put(`/evaluaciones/${nuevaEvaluacion.id}`, nuevaEvaluacion);
        alert("Evaluación actualizada con éxito");
      } else {
        await API.post("/evaluaciones", nuevaEvaluacion);
        alert("Evaluación creada con éxito");
      }
      setNuevaEvaluacion({ titulo: "", tipo: "diagnostica", descripcion: "" });
      const res = await API.get("/evaluaciones");
      setEvaluaciones(res.data);
    } catch (err) {
      console.error("Error al guardar evaluación:", err);
    }
  };

  const handleEdit = (evaluacion) => {
    setNuevaEvaluacion(evaluacion);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta evaluación?")) 
      
      return;
    try {
      await API.delete(`/evaluaciones/${id}`);
      alert("Evaluación eliminada");
      const res = await API.get("/evaluaciones");
      setEvaluaciones(res.data);
    } catch (err) {
      console.error("Error al eliminar evaluación:", err);
    }
  };

  if (loading) return <p>Cargando evaluaciones...</p>;

  return (
    <div>
      <h2>Evaluaciones</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={nuevaEvaluacion.titulo}
          onChange={handleChange}
          required
        />
        <select name="tipo" value={nuevaEvaluacion.tipo} onChange={handleChange}>
          <option value="diagnostica">Diagnóstica</option>
          <option value="final">Final</option>
          <option value="autoevaluacion">Autoevaluación</option>
        </select>
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={nuevaEvaluacion.descripcion}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {nuevaEvaluacion.id ? "Actualizar Evaluación" : "Agregar Evaluación"}
        </button>
      </form>

      {evaluaciones.length === 0 ? (
        <p>No hay evaluaciones registradas.</p>
      ) : (
        <ul>
          {evaluaciones.map((e) => (
            <li key={e.id}>
              <strong>{e.titulo}</strong> ({e.tipo}) - {e.descripcion}
              <button onClick={() => handleEdit(e)}>Editar</button>
              <button onClick={() => handleDelete(e.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Evaluaciones;
