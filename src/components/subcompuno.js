import React from 'react';
import './estilos.css';

class SubCompUno extends React.Component{
  render(){
    return(
      <div className="caja">

        <div className="nombre">{this.props.title}</div>

        <div className="correo">{this.props.correo}</div>

      </div>

    );
  }
}


export default SubCompUno;
