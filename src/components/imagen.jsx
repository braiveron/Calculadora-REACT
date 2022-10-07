import React from "react";
import freeCodeCampLogo from "../imagenes/logoFreeCode.png";
import "../hojas-de-estilo/logo.css";

const Imagen = () => (
  <div>
    <img
      src={freeCodeCampLogo}
      className="freecodecamp-logo"
      alt="Logo de FreeCodeCamp"
    />
  </div>
);

export default Imagen;
