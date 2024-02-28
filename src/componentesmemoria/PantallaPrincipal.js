import Boton from './Boton';

export default function PantallaPrincipal(props) {

    const levelText = ['Fácil', 'Medio', 'Difícil'];

    return (
        <div className='mainscreen text-center'>
            <h1 className='mainscreen--title'>Bienvenido al Juego de Memoria</h1>
            <div className='mainscreen--menu'>
                <p>Selecciona el Nivel</p>
                <Boton label={levelText[props.level]} action={props.changeDifficulty} /> <br />
                <Boton label="Empezar" action={ () => props.setStart(1) } />
            </div>
        </div>
    )
}