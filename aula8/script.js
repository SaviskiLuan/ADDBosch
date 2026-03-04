const arr = [1, 2, 3, 4, 5]
const soma = arr.reduce((acc, value) => {
    return acc + value
},0)
console.log(soma)

const pessoas = []

const pessoa1 = {
    name: 'igor',
    lastname: 'Machado',
    age: 20    
}

const pessoa2 = {
    name: 'Gabriel',
    lastname: 'Wendt',
    age: 20    
}

const pessoa3 = {
    name: 'Miguel',
    lastname: 'Gradela',
    age: 18    
}

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
console.log(pessoas)

const mappedPeople = pessoas.map((pessoa) => {
    return {name: pessoa.name, lastname: pessoa.lastname}
})

console.log(mappedPeople)