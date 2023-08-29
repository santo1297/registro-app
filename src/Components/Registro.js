
import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import '../App.css';


const Registro = () => {
  return (
    <div className="card-container">
      <div className="title">CREA UNA CUENTA</div>
      <div className="social-icons">
        <SocialButton icon="github" link="#" />
        <SocialButton icon="linkedin" link="#" />
        <SocialButton icon="behance" link="#" />
      </div>
      <div className="text">O usa tu email para ingresar</div>
      <Formulario />
    </div>
  );
};

export default Registro;
