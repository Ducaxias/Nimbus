const Produtos = [
    {
      nome: "Corto Maltese <br> Balada do mar salgado",
      autor: "Hugo Pratt",
      img: 'Assets/Images/Corto.jpeg',
      preço: 25
    },
    {
      nome: "Paraíso Perdido",
      autor: "Jhon Milton",
      img: 'Assets/Images/Paraiso.jpeg',
      preço: 32
    },
    {
      nome: "Quincas Borba",
      autor: "Machado de Assis",
      img: 'Assets/Images/Quincas.jpeg',
      preço: 40.00
    },
]

Lojinha = () => {
      var containerProdutos = document.getElementById('produtos');
      Produtos.map((val) => {
        containerProdutos.innerHTML+= `
            <div class = produto-single>
              <a href="#">
                <img src="`+val.img+`"/>
                <p>`+val.nome+`</p>
                <p class="autor">`+val.autor+`</p>
                <div>
                  <p class="preco"> R$`+val.preço+`</p>
                </div>
              </a>
            </div>
        `;
      })
    }
    Lojinha();