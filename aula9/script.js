class Automovel{
    modelo
    marca
    cor
    ano
    motor

    constructor(modelo, marca, cor, ano, motor){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.motor = motor
    }

    acelerar(){
        return `O veículo ${this.marca} ${this.modelo} está acelerando`
    }

    frear(){
        return `O veículo ${this.marca} ${this.modelo} está frear`
    }

    estercar(){
        return `O veículo ${this.marca} ${this.modelo} está virando para a ${lado}`
    }
}

const veiculo1 = new Automovel('Fiesta', 'Ford', 'Branco', 2015, '1.5L')
console.log(veiculo1.acelerar())