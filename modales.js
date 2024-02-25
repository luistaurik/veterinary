const fs = require('fs')

const saludar = (nombre) => {
    console.log(`Hola ${nombre}, como estai?`)
}

const darLasGracias = (nombre) => {
    console.log(`Muchas gracias, ${nombre}`)
}

module.exports = {saludar, darLasGracias}