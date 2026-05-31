import React, { useEffect, useState } from "react";
import API from "../services/api";

function Narrativas() {
  const [narrativas, setNarrativas] = useState([]);
  const [nuevaNarrativa, setNuevaNarrativa] = useState({
    titulo: "",
    contenido: "",
    autor: "",
  });

  // Cargar narrativas al iniciar
  useEffect(() => {
    const fetchNarrativas = async () => {
      try {
        const res = await API.get("/narrativas");
        setNarrativas(res.data);
      } catch (err) {
        console.error("Error al obtener narrativas:", err);
      }
    };
    fetchNarrativas();
  }, []);

  // Manejo de formulario
  const handleChange = (e) => {
    setNuevaNarrativa({ ...nuevaNarrativa, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (nuevaNarrativa.id) {
        // Editar narrativa
        await API.put(`/narrativas/${nuevaNarrativa.id}`, nuevaNarrativa);
        alert("Narrativa actualizada con éxito");
      } else {
        // Crear narrativa
        await API.post("/narrativas", nuevaNarrativa);
        alert("Narrativa creada con éxito");
      }
      setNuevaNarrativa({ titulo: "", contenido: "", autor: "" });
      const res = await API.get("/narrativas");
      setNarrativas(res.data);
    } catch (err) {
      console.error("Error al guardar narrativa:", err);
    }
  };

  const handleEdit = (narrativa) => {
    setNuevaNarrativa(narrativa);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta narrativa?")) return;
    try {
      await API.delete(`/narrativas/${id}`);
      alert("Narrativa eliminada");
      const res = await API.get("/narrativas");
      setNarrativas(res.data);
    } catch (err) {
      console.error("Error al eliminar narrativa:", err);
    }
  };

  return (
    <div>
      <h2>Narrativas</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={nuevaNarrativa.titulo}
          onChange={handleChange}
          required
        />
        <textarea
          name="contenido"
          placeholder="Contenido"
          value={nuevaNarrativa.contenido}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          value={nuevaNarrativa.autor}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {nuevaNarrativa.id ? "Actualizar Narrativa" : "Agregar Narrativa"}
        </button>
      </form>

      <ul>
        {narrativas.map((n) => (
          <li key={n.id}>
            <strong>{n.titulo}</strong> - {n.autor}
            <button onClick={() => handleEdit(n)}>Editar</button>
            <button onClick={() => handleDelete(n.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Narrativas;
