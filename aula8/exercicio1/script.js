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

const pessoas_name_usuario = users.map((pess) => pess.name)
console.log(pessoas_name_usuario)

const pessoas_nomes_maiscula = users.map((pess) => pess.name.toUpperCase())
console.log(pessoas_nomes_maiscula)

const pessoas_salary_12 = users.map((salar) => salar.salary * 12)
console.log(pessoas_salary_12)

const pessoas_name_age = users.map((pess) =>{
    return {name: pess.name, age: pess.age}
})
console.log(pessoas_name_age)

const pessoa_name_salary = users.map((pess) => {
    return {name: pess.name, salary: "R$ " + pess.salary + ",00"}
})
console.log(pessoa_name_salary)

const pessoa_classificar = users.map((pess) =>{
    let categoria = "";
        if (pess.age <= 25){
            categoria = "Junior"
        }
        else if (pess.age > 26 && pess.age < 35){   
            categoria = "Pleno"
        }
        else {
            categoria = "Senior"
        }
    return {name: pess.name, categoria: categoria}
})
console.log(pessoa_classificar)

const pessoa_nivel = users.map((pess) => {
    let nivel = "";
    if (pess.salary <= 3000){
        nivel = "Baixo"
    }
    else if (pess.salary >= 3001 && pess.salary <= 6000) {
        nivel = "Medio"
    }
    else {
        nivel = "Alto"
    }
    return {name: pess.name, nivel: nivel}
})
console.log(pessoa_nivel)