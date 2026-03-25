const dados = require('./dados.json')
const listProduto = []
const nomeProduto = []
const listaNova = []
const listaMaior50 = []
const listaQuantidadeMenor5 = []

dados.forEach((item) => {
    const produto = {
        nome: item.nome,
        preco: item.preco,
        categoria: item.categoria,
        quantidade: item.quantidade,
    } ;
    listProduto.push(produto);
    nomeProduto.push(item.nome);
    valorTotal = item.preco * item.quantidade;
    listaNova.push({
        nome: item.nome,
        preco: item.preco,
        valorTotal: valorTotal,
    });

    if(valorTotal > 50){
        listaMaior50.push({
            nome: item.nome,
            preco: item.preco,
            valorTotal: valorTotal,
        });
    }

    if(item.quantidade < 5){
        listaQuantidadeMenor5.push({
            nome: item.nome,
            preco: item.preco,
            quantidade: item.quantidade,
        });
    }

}) 

console.log(listaNova);
console.log(listaMaior50);
console.log(listaQuantidadeMenor5);
console.log(nomeProduto)