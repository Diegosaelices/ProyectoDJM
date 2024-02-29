export default function Boton(props) {
    return (
        // Se devuelve un elemento de botón JSX con las siguientes características:
        <button className='button' onClick={props.action}>{props.label}</button>
        // - onClick se establece como la función que se pasa en props.action. Esto indica que cuando se haga clic en el botón, se llamará a la función proporcionada como action.
        // - El contenido del botón es dinámico y se establece como el valor de props.label, que es el texto que se mostrará en el botón.
    );
}
