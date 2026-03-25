class Veiculo{
    #id
    #marca 
    #modelo
    #preco
    #disponivel

    constructor(id, marca, modelo, preco){
        this.#id = id;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#preco = preco;
        this.#disponivel = true;

        if(marca === '' || marca.length < 2 || modelo === '' || modelo.length < 2 || preco <= 0){
            return console.error("Dados inválidos");
        }
    }

    getId(){
        return this.#id;
    }

    getMarca(){
        return this.#marca;
    }

    getModelo(){
        return this.#modelo;
    }   

    getPreco(){
        return this.#preco;
    }

    setPreco(preco){
        return preco <= 0  || this.#disponivel === true? console.error("Preço inválido") : this.#preco = preco;
    }

    getDisponivel(){
        return this.#disponivel;
    }

    vender(){
        if(this.#disponivel === true){
            this.#disponivel = false;
            return console.log("Veículo vendido com sucesso!");
        }

        return console.error("Veículo indisponível para venda");
    }

    retonarEstoque(){
        if(this.#disponivel === false){
            this.#disponivel = true;
            return console.log("Veículo retornado ao estoque com sucesso!");
        }
    }

    mostrarInfo(){
        return {
            id: this.getId(),
            marca: this.getMarca(),
            modelo: this.getModelo(),
            preco: this.getPreco(),
            disponivel: this.getDisponivel()
        }
    }   
}

class Carro extends Veiculo{
    #portas

    constructor(id, marca, modelo, preco, portas){
        super(id, marca, modelo, preco)
        this.#portas = portas

        if(portas <= 0){
            return console.error("Número de portas inválido");
        }

        if(!isNaN(portas)){
            return console.error("Número de portas deve ser um número válido");
        }
    }
}

class Moto extends Veiculo{
    #cilindradas
    constructor(id, marca, modelo, preco, cilindradas){
        super(id, marca, modelo, preco)
        this.#cilindradas = cilindradas

        if(cilindradas <= 0){
            return console.error("Cilindradas inválidas");
        }

        if(!isNaN(cilindradas)){
            return console.error("Cilindradas devem ser um número válido");
        }

        if(cilindradas > 50 || cilindradas < 2000){
            return console.error("Cilindradas fora do intervalo válido");
        }
    }
}


const veiculo1 = new Veiculo(1, 'toyota', 'Corolla', 20000, true)
console.log(veiculo1.mostrarInfo());
veiculo1.vender();
console.log(veiculo1.mostrarInfo());
veiculo1.setPreco(25000);
console.log(veiculo1.mostrarInfo());

const carro1 = new Carro(2, 'Honda', 'Civic', 22000, '2')
