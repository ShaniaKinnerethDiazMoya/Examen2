import { useState, useEffect } from 'react';
import { useLibros } from '../context/LibroContext';

export default function Formulario({ libroActual, setLibroActual }) {
  const { agregarLibro, editarLibro } = useLibros();
  const [form, setForm] = useState({ titulo: '', autor: '', genero: '', anio: '' });

  useEffect(() => {
    if (libroActual) {
      setForm(libroActual);
    } else {
      setForm({ titulo: '', autor: '', genero: '', anio: '' });
    }
  }, [libroActual]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (libroActual) {
      editarLibro(libroActual.id, form);
      setLibroActual(null);
    } else {
      agregarLibro(form);
    }
    setForm({ titulo: '', autor: '', genero: '', anio: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Título" required />
      <input name="autor" value={form.autor} onChange={handleChange} placeholder="Autor" required />
      <input name="genero" value={form.genero} onChange={handleChange} placeholder="Género" required />
      <input name="anio" type="number" value={form.anio} onChange={handleChange} placeholder="Año" required />
      <button type="submit">{libroActual ? 'Editar' : 'Agregar'}</button>
    </form>
  );
}
