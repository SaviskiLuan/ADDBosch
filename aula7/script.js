let x = [1,2,3,4, {name: 'Igu'}]

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

pessoas[0].empresa = 'Bosch'
pessoas[1].empresa = 'Bosch'
pessoas[2].empresa = 'Bosch'

const filteredpeople = pessoas.filter((p) => p.age >= 20)
const findigo = pessoas.find((p) => p.name == 'igor')

console.log(filteredpeople)
console.log(pessoas.indexOf(findigo))

let container = document.getElementById('container')

function createCard(pessoa){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${pessoa.name} ${pessoa.age}`
    div.appendChild(span)

    return div
}

filteredpeople.forEach(pessoa => {
    const card = createCard(pessoa)
    container.appendChild(card)    
})