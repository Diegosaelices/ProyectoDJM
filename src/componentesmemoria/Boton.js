// Esta es una función de componente de React que exporta un botón personalizado.
// Toma props como argumento que contiene propiedades: action y label.
export default function Boton(props) {
    return (
        // Se devuelve un elemento de botón JSX con las siguientes características:
        <button className='button' onClick={props.action}>{props.label}</button>
        // - className establece la clase CSS del botón como 'button'.
        // - onClick se establece como la función que se pasa en props.action. Esto indica que cuando se haga clic en el botón, se llamará a la función proporcionada como action.
        // - El contenido del botón es dinámico y se establece como el valor de props.label, que es el texto que se mostrará en el botón.
    );
}
