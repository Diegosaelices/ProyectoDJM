import React from 'react'; // Importa React desde la librería 'react'
import '../styles/Cuadro.css'; // Importa los estilos del cuadro
import classNames from 'classnames'; // Importa la función classNames para manejar las clases condicionales

const Cuadro = ({ valor, onClick, turno, ganador }) => { // Define el componente Cuadro que recibe las props: valor, onClick, turno y ganador

    // Función para manejar el clic en el cuadro
    const manejarClick = () => {
        // Verifica que el turno no sea nulo y que el valor del cuadro también sea nulo antes de manejar el clic
        (turno !== null && valor === null) && onClick();
    }

    // Determina las clases del cuadro basadas en el estado del juego
    let claseCuadro = classNames({
        cuadro: true, // Clase base del cuadro
        [`cuadro--${valor}`]: valor !== null, // Clase que indica el valor del cuadro (X o O)
        ganador: ganador, // Clase que indica si el cuadro es parte de una línea ganadora
    });

    // Renderiza el componente Cuadro
    return (
        <div className={claseCuadro} onClick={() => manejarClick()}> {/* Div que representa el cuadro con su clase y manejador de clic */}
        </div>
    )
}

export default Cuadro; // Exporta el componente Cuadro
