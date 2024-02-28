export default function convertirTiempo(milisegundos){

    let todosSegundos = milisegundos / 1000
    let minutos = Math.trunc(todosSegundos / 60)
    let segundos = todosSegundos - (minutos * 60)

    return minutos.toString().padStart(2, '0') +':'+segundos.toString().padStart(2, '0')
}