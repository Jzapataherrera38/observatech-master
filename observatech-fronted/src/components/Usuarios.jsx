import React, { useEffect, useState } from "react";
import API from "../services/api";


function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "alumno",
  });

  // Cargar usuarios al iniciar
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await API.get("/usuarios");
        console.log("Usuarios recibidos:", res.data);
        setUsuarios(res.data);
      } catch (err) {
        console.error("Error al obtener usuarios:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsuarios();
  }, []);

  const handleChange = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (nuevoUsuario.id) {
        await API.put(`/usuarios/${nuevoUsuario.id}`, nuevoUsuario);
        alert("Usuario actualizado con éxito");
      } else {
        await API.post("/usuarios", nuevoUsuario);
        alert("Usuario creado con éxito");
      }
      setNuevoUsuario({ nombre: "", email: "", password: "", rol: "alumno" });
      const res = await API.get("/usuarios");
      setUsuarios(res.data);
    } catch (err) {
      console.error("Error al guardar usuario:", err);
    }
  };

  const handleEdit = (usuario) => {
    setNuevoUsuario(usuario);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    try {
      await API.delete(`/usuarios/${id}`);
      alert("Usuario eliminado");
      const res = await API.get("/usuarios");
      setUsuarios(res.data);
    } catch (err) {
      console.error("Error al eliminar usuario:", err);
    }
  };

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div>
      <h2>Gestión de Usuarios</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoUsuario.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={nuevoUsuario.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={nuevoUsuario.password || ""}
          onChange={handleChange}
          required={!nuevoUsuario.id} // contraseña obligatoria solo al crear
        />
        <select name="rol" value={nuevoUsuario.rol} onChange={handleChange}>
          <option value="admin">Admin</option>
          <option value="profesor">Profesor</option>
          <option value="alumno">Alumno</option>
        </select>
        <button type="submit">
          {nuevoUsuario.id ? "Actualizar Usuario" : "Agregar Usuario"}
        </button>
      </form>

      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nombre}</td>
                <td>{u.email}</td>
                <td>{u.rol}</td>
                <td>
                  <button onClick={() => handleEdit(u)}>Editar</button>
                  <button onClick={() => handleDelete(u.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Usuarios;

