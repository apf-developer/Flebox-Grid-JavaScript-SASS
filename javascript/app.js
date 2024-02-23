
// Objetos
var auto = {
    marca: 'Mercedes-benz',
    modelo: 'R5',
    velocidad: '250 km/h',
    antiguedad: 2022,
    mostrarDatos() {
        console.log('Marca: '+this.marca+' - '+this.modelo)
        console.log('Año: '+this.antiguedad)
        console.log('Velocidad: '+this.velocidad)
    }
}

auto.mostrarDatos()

//Promesas
var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = 'Hola muy buenas a todos!'

        if (saludo) {
            resolve(saludo)
        } else {
            reject('No hay saludo disponible.')
        }
    }, 2000);
})

saludar.then(resultado => {
    alert(resultado)
})
.catch(error => {
    alert(error)
})