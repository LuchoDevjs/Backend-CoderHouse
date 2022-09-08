
const mostrarLetras = (texto, cb) => {
    let position = 0
    const intervalId = setInterval(() => {
        if (position >= texto.length) {
            clearInterval(intervalId)
            cb()
            return
        }
        console.log(texto[position])
        position++
    }, 1000);
}

const fin = () => console.log('Termine')

// 0 ... 250 ... 500 ... 1000
// H      H       H

mostrarLetras('¡Hola!', fin)

setTimeout(() => {
    mostrarLetras('¡Hola!', fin)
}, 250);

setTimeout(() => {
    mostrarLetras('¡Hola!', fin)
}, 500);