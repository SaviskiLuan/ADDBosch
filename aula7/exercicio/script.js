const users = [
{ id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
{ id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
{ id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
{ id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
{ id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
{ id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
{ id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
{ id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
{ id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
{ id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
{ id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
{ id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
{ id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
{ id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
{ id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

const filters = []

const filterActiveUsers = users.filter((p) => p.active == true)
const filterInactiveUsers = users.filter((p) => p.active == false)
const filterDeveloper = users.filter((p) => p.role == 'dev')
const filterDesigners = users.filter((p) => p.role == 'designer')
const filterManagers = users.filter((p) => p.role == 'manager')
const filterDataAnalyst = users.filter((p) => p.role == 'data_analyst')
const filterUsers5000 = users.filter((p) => p.salary > 5000)
const filterUsers4000 = users.filter((p) => p.salary < 4000)
const filterAge30 = users.filter((p) => p.age > 30)
const filterAge25 = users.filter((p) => p.age < 25)
const filterActiveDataAnalyst = users.filter((p) => p.active == true && p.role == 'data_analyst')
const filterDevs4000 = users.filter((p) => p.salary > 4000 && p.role == 'dev')
const filterManagers30 = users.filter((p) => p.age > 30 && p.role == 'manager')

filters.push(
  { title: "Usuários Ativos", dados: filterActiveUsers },
  { title: "Usuários Inativos", dados: filterInactiveUsers },
  { title: "Desenvolvedores", dados: filterDeveloper },
  { title: "Designers", dados: filterDesigners },
  { title: "Managers", dados: filterManagers },
  { title: "Data Analysts", dados: filterDataAnalyst },
  { title: "Usuários com salário 5000+", dados: filterUsers5000 },
  { title: "Usuários com salário 4000+", dados: filterUsers4000 },
  { title: "Usuários com 30 anos", dados: filterAge30 },
  { title: "Usuários com 25 anos", dados: filterAge25 },
  { title: "Data Analysts Ativos", dados: filterActiveDataAnalyst },
  { title: "Desenvolvedores com salário 4000+", dados: filterDevs4000 },
  { title: "Managers com 30 anos", dados: filterManagers30 }
);

let container = document.getElementById('container')

function createCard(user){
    let div = document.createElement('div')
    let span = document.createElement('span')
    let title = document.createElement('h1')
    span.innerHTML = `${user.title}`
    div.appendChild(title)
    div.appendChild(span)
    return div
}

filters.forEach(array =>{
    array.forEach(user => {
        const card = createCard(user)
        container.appendChild(card)
    })
})

