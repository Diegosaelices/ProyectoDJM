import Boton from "./Boton";

export default function PantallaFinal(props) {
  return (
    <div className='finishscreen text-center'>
        <h1 className='finishscreen--title'>¡Has ganado!</h1>
        <Boton label="Repetir juego" action={props.setRestart}/>
    </div>
  );
}
