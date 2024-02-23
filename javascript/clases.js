class Auto {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo
        this.velocidad = velocidad
        this.antiguedad = antiguedad
    }

    aumentaVelocidad() {
        this.velocidad += 1
    }

    reducirVelocidad() {
        this.velocidad -= 1
    }
}

var auto1 = new Auto('BMW', 270, 2022)
var auto2 = new Auto('Audi', 250, 2022)
var auto3 = new Auto('Mercedes-Benz', 280, 2022)

for (let i = 0; i < 10; i++) {
    auto1.aumentaVelocidad();
}
console.log(auto1)


//Herencia
class AutoBus extends Auto {
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad)
        this.largo = 10
        this.alto = 5
    }

    mostrarDimensiones() {
        console.log('Largo: '+this.largo+ ' - Ancho: '+this.alto)
    }
}

var autobus = new AutoBus('Pegasus', 200, 2017)
autobus.aumentaVelocidad()
console.log(autobus)
autobus.mostrarDimensiones()