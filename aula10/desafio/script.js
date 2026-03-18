class User{
    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password){
        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password

        if(!name){
            console.error("O nome não pode estar vazio")
        }

        if (!email.includes("@")) {
            console.error("Email inválido");
        }

        if (password.length < 6){
            console.error("Senha muito fraca")
        }
    }

    get id(){
        return this.#id
    }
    get name(){
        return this.#name
    }
    get email(){
        return this.#email
    }
    get password(){
        return this.#password
    }

    get name(){
        return this.#name
    }

    new_name(name, new_name){
        name = new_name
        return name
    }
}

const u1 = new User(1, "Luan", "luan@saviski.com", "123456")

new_name(u1.name, "Lucas")
console.log(u1.id)