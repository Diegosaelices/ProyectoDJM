import React from 'react';
import '../componentesmemoria/styles/sylesmemoria.css';

// Definición del componente "Carta" que representa una carta en el juego de memoria.
export default function Carta(props) {
  return (
    <div 
      // Se establecen las clases CSS dinámicamente utilizando template literals.
      // Si props.rotate es true, se agrega la clase 'rotate' para mostrar la carta girada.
      className={`card ${props.rotate ? 'rotate' : ''}`}
      // Se establece el atributo data-id con el valor de props.id, que es una identificación única para esta carta.
      data-id={props.id} 
      // Se establece un controlador de eventos onClick que se activará cuando se haga clic en la carta.
      // Este controlador pasa los valores de props.id y props.pinUp a la función actionRotate, que manejará la lógica de girar la carta.
      onClick={() => props.actionRotate(props.id, props.pinUp)} 
      // Se establece un atributo personalizado data-bind con el valor de props.bind.
      data-bind={props.bind}
    >
      {/* Este es el contenedor interno de la carta, que contiene tanto la parte frontal como la trasera de la carta. */}
      <div className='card--inner'>
        {/* Si la carta está girada (props.rotate es true), se muestra tanto la parte frontal como la trasera de la carta. */}
        {props.rotate ? (
          // Se utiliza un fragmento de React para envolver múltiplos elementos hijos sin necesidad de agregar un nodo adicional al DOM.
          <React.Fragment>
            {/* La parte frontal de la carta, que muestra el símbolo de la carta. */}
            <div className='card--front middle'>
              <img src={props.symbol} alt="Card Symbol" />
            </div>
            {/* La parte trasera de la carta, que muestra el mismo símbolo que la parte frontal. */}
            <div className='card--back middle'>
              <img src={props.symbol} alt="Card Symbol" />
            </div>
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
}
