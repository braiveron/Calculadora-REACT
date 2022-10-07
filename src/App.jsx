import "./App.css";
import Button from "./components/button";
import Pantalla from "./components/pantalla";
import BotonClear from "./components/buttonClear.jsx";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const agregarInput = (val) => {
    setInput(input + val);
  };
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrear datos para realizar los calculos");
    }
  };
  return (
    <div className="background">
      <div className="App">
        <div className="contenedor-calculadora">
          <Pantalla input={input} />
          <div className="fila">
            <Button manejarClick={agregarInput}>1</Button>
            <Button manejarClick={agregarInput}>2</Button>
            <Button manejarClick={agregarInput}>3</Button>
            <Button manejarClick={agregarInput}>+</Button>
          </div>
          <div className="fila">
            <Button manejarClick={agregarInput}>4</Button>
            <Button manejarClick={agregarInput}>5</Button>
            <Button manejarClick={agregarInput}>6</Button>
            <Button manejarClick={agregarInput}>-</Button>
          </div>
          <div className="fila">
            <Button manejarClick={agregarInput}>7</Button>
            <Button manejarClick={agregarInput}>8</Button>
            <Button manejarClick={agregarInput}>9</Button>
            <Button manejarClick={agregarInput}>*</Button>
          </div>
          <div className="fila">
            <Button manejarClick={calcularResultado}>=</Button>
            <Button manejarClick={agregarInput}>0</Button>
            <Button manejarClick={agregarInput}>.</Button>
            <Button manejarClick={agregarInput}>/</Button>
          </div>
          <div className="fila">
            <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
