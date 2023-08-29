import React from 'react';
import './Alert.css';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
