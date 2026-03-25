listProdutos = [];

const nomeProduto = document.getElementById("produto-nome");
const precoProduto = document.getElementById("produto-preco");
const quantidadeProduto = document.getElementById("produto-quantidade");
const btnAdicionar = document.getElementById("cadastrar-produto");
const produtoMaisCaroNome = document.getElementById("produto-caro-nome");
const valorTotal = document.getElementById("valor-estoque");
const produtoMaiorQuantidadeNome = document.getElementById("produto-quantidade-nome");

function valorTotalEstoque(){
    let total = 0;
    listProdutos.forEach((produto) => {
        total += produto.preco * produto.quantidade;
    });
    return total;
}

function produtoMaisCaro(){
    let maisCaro = listProdutos[0];
    listProdutos.forEach((produto) => {
        if(produto.preco > maisCaro.preco){
            maisCaro = produto;
        }
    });
    return maisCaro;
}

function produtoMaiorQuantidade(){
    let maiorQuantidade = listProdutos[0];
    listProdutos.forEach((produto) => {
        if(produto.quantidade > maiorQuantidade.quantidade){
            maiorQuantidade = produto;
        }
    });
    return maiorQuantidade;
}

btnAdicionar.addEventListener("click", () => {
    const produto = {
        nome: nomeProduto.value,
        preco: precoProduto.value,
        quantidade: quantidadeProduto.value,
    };

    listProdutos.push(produto);
    console.log(listProdutos);

    nomeProduto.value = "";
    precoProduto.value = "";
    quantidadeProduto.value = "";

    produtoMaisCaroNome.innerHTML = produtoMaisCaro().nome;
    valorTotal.innerHTML = valorTotalEstoque();
    produtoMaiorQuantidadeNome.innerHTML = produtoMaiorQuantidade().nome;   
});