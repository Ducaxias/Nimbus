const Produtos = [
    {
      nome: "Corto Maltese: balada do mar salgado",
      autor: "Hugo Pratt",
      img: 'Assets/Images/Corto.jpeg',
    },
    {
      nome: "Paraíso Perdido",
      autor: "Jhon Milton",
      img: 'Assets/Images/Paraiso.jpeg',
    },
    {
      nome: "Quincas Borba",
      autor: "Machado de Assis",
      img: 'Assets/Images/Quincas.jpeg',
    },
]

Lojinha = () => {
      var containerProdutos = document.getElementById('produtos');
      Produtos.map((val) => {
        containerProdutos.innerHTML+= `
            <div class = produto-single>
              <img src="`+val.img+`"/>
              <p>`+val.nome+`</p>
              <a href="#">Comprar</a>
            </div>
        `;
      })
    }
    Lojinha();