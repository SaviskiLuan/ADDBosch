class Conta{
    #senha
    #agencia
    #n_conta
    #titular
    #saldo

    constructor(senha, agencia, n_conta, titular, saldo){
        this.#senha = senha
        this.#agencia = agencia
        this.#n_conta = n_conta
        this.#titular = titular
        this.#saldo = saldo
    }

    get saldo(){
        return this.#saldo;
    }

    set saldo(value){
        this.#saldo += value;
    }

    despositar(n_conta, agencia, valor){
        if(n_conta === this.#n_conta && agencia === this.#agencia){
            return this.#saldo += valor
        }
        else{
            return console.error("Não foi possível executar a operação")
        }
    }
}

const c1 = new Conta("1234", "111", "400242429", "Luan", 2000)

c1.despositar("400242429", "1211", 50000)
console.log(c1.saldo)