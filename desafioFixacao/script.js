books = []

class Item{
    #id
    #title
    #available

    constructor(id, title){
        this.#id = id
        this.#title = title
        this.#available = true

        if(!title){
            return console.error("Informações inváidas! Verifique seus dados enviados")
        }
    }

    getId(){
        return this.#id
    }

    getTitle(){
        return this.#title
    }

    setTitle(title){
        return !title ? console.error("Erro ao setar o título!") : this.#title = title
    }

    lendBook(){
        return !title ? console.error("O livro não está disponível para empréstimo") : this.#available = true
    }

    returnBook(){
        return !available ? console.error("O livro não pode ser devolvido") : this.#available == false
    }

}

class Book extends Item{
    #author

    constructor(id, title, author){
        super(id, title)
        this.#author = author
        
        if(!author){
            return console.error("Ator está vazio")
        }
    }

    showData(){
        return{
            id: this.getId(),
            title: this.getTitle()
        }
    }
}