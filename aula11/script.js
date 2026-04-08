const vendas = [
  { id: 1, produto: "Notebook", categoria: "Eletrônicos", preco: 3500, quantidade: 2, cliente: "Ana", cidade: "Curitiba", data: "2025-01-10" },
  { id: 2, produto: "Celular", categoria: "Eletrônicos", preco: 2000, quantidade: 1, cliente: "Carlos", cidade: "São Paulo", data: "2025-01-12" },
  { id: 3, produto: "Camiseta", categoria: "Roupas", preco: 80, quantidade: 3, cliente: "João", cidade: "Curitiba", data: "2025-01-15" },
  { id: 4, produto: "Calça", categoria: "Roupas", preco: 120, quantidade: 2, cliente: "Maria", cidade: "Rio de Janeiro", data: "2025-01-20" },
  { id: 5, produto: "Tênis", categoria: "Calçados", preco: 300, quantidade: 1, cliente: "Ana", cidade: "Curitiba", data: "2025-02-01" },
  { id: 6, produto: "Fone", categoria: "Eletrônicos", preco: 150, quantidade: 4, cliente: "Pedro", cidade: "Belo Horizonte", data: "2025-02-03" },
  { id: 7, produto: "Relógio", categoria: "Acessórios", preco: 500, quantidade: 1, cliente: "Lucas", cidade: "São Paulo", data: "2025-02-10" },
  { id: 8, produto: "Mochila", categoria: "Acessórios", preco: 200, quantidade: 2, cliente: "Fernanda", cidade: "Curitiba", data: "2025-02-15" },
  { id: 9, produto: "Tablet", categoria: "Eletrônicos", preco: 1800, quantidade: 1, cliente: "Carlos", cidade: "São Paulo", data: "2025-02-18" },
  { id: 10, produto: "Jaqueta", categoria: "Roupas", preco: 250, quantidade: 1, cliente: "Ana", cidade: "Curitiba", data: "2025-03-01" },
  { id: 11, produto: "Sandália", categoria: "Calçados", preco: 120, quantidade: 2, cliente: "Juliana", cidade: "Salvador", data: "2025-03-03" },
  { id: 12, produto: "Boné", categoria: "Acessórios", preco: 70, quantidade: 3, cliente: "Pedro", cidade: "Belo Horizonte", data: "2025-03-05" },
  { id: 13, produto: "Monitor", categoria: "Eletrônicos", preco: 900, quantidade: 1, cliente: "Lucas", cidade: "São Paulo", data: "2025-03-10" },
  { id: 14, produto: "Teclado", categoria: "Eletrônicos", preco: 250, quantidade: 2, cliente: "Fernanda", cidade: "Curitiba", data: "2025-03-12" },
  { id: 15, produto: "Mouse", categoria: "Eletrônicos", preco: 100, quantidade: 3, cliente: "João", cidade: "Curitiba", data: "2025-03-15" }
];

function agrupar(lista, chave, func) {
  const resultado = {};
  lista.forEach(item => {
    const key = item[chave];
    if (!resultado[key]) resultado[key] = 0;
    resultado[key] += func(item);
  });
  return resultado;
}

function contar(lista, chave) {
  const resultado = {};
  lista.forEach(item => {
    const key = item[chave];
    if (!resultado[key]) resultado[key] = 0;
    resultado[key]++;
  });
  return resultado;
}

function criarGrafico(id, tipo, labels, dados) {
  new Chart(document.getElementById(id), {
    type: tipo,
    data: {
      labels: labels,
      datasets: [{
        data: dados
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

const fatCat = agrupar(vendas, "categoria", v => v.preco * v.quantidade);
const qtdCat = agrupar(vendas, "categoria", v => v.quantidade);
const fatCidade = agrupar(vendas, "cidade", v => v.preco * v.quantidade);
const pedCidade = contar(vendas, "cidade");
const gastoCliente = agrupar(vendas, "cliente", v => v.preco * v.quantidade);
const clientes = contar(vendas, "cliente");
const qtdProduto = agrupar(vendas, "produto", v => v.quantidade);

const vendasMes = {};
vendas.forEach(v => {
  const mes = v.data.substring(0,7);
  if (!vendasMes[mes]) vendasMes[mes] = 0;
  vendasMes[mes] += v.preco * v.quantidade;
});

criarGrafico("faturamentoCategoria","bar",Object.keys(fatCat),Object.values(fatCat));
criarGrafico("quantidadeCategoria","pie",Object.keys(qtdCat),Object.values(qtdCat));
criarGrafico("faturamentoCidade","bar",Object.keys(fatCidade),Object.values(fatCidade));
criarGrafico("pedidosCidade","pie",Object.keys(pedCidade),Object.values(pedCidade));
criarGrafico("gastoCliente","bar",Object.keys(gastoCliente),Object.values(gastoCliente));
criarGrafico("clientesDistribuicao","pie",Object.keys(clientes),Object.values(clientes));
criarGrafico("quantidadeProduto","bar",Object.keys(qtdProduto),Object.values(qtdProduto));
criarGrafico("faturamentoCategoriaPie","pie",Object.keys(fatCat),Object.values(fatCat));

new Chart(document.getElementById("quantidadeVsFaturamento"), {
  type: "bar",
  data: {
    labels: Object.keys(qtdCat),
    datasets: [
      { data: Object.values(qtdCat) },
      { data: Object.values(fatCat) }
    ]
  }
});

criarGrafico("vendasMes","bar",Object.keys(vendasMes),Object.values(vendasMes));