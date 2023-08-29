// components/Formulario.js
import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setMensaje('Ingresa un email válido');
    } else if (contrasena !== confirmarContrasena) {
      setMensaje('Las contraseñas no coinciden');
    } else if (nombre === '' || email === '' || contrasena === '' || confirmarContrasena === '') {
      setMensaje('Completa el formulario');
    } else {
      setMensaje('Registro Exitoso');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Nombre"
          className="input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tu email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="input"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          className="input"
          value={confirmarContrasena}
          onChange={(e) => setConfirmarContrasena(e.target.value)}
        />
        <button type="submit" className="button">
          Registrarse
        </button>
      </form>
      <p className={`alert ${mensaje ? 'show' : ''}`}>{mensaje}</p>
    </div>
  );
};

export default Formulario;
