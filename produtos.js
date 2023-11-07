const Produtos = [
    {
      id: 0,
      nome: "Corto Maltese <br> Balada do mar salgado",
      autor: "Hugo Pratt",
      img: 'Assets/Images/Corto.jpeg',
      preço: 25,
      quantidade: 0
    },
    {
      id: 1,
      nome: "Paraíso Perdido",
      autor: "Jhon Milton",
      img: 'Assets/Images/Paraiso.jpeg',
      preço: 32,
      quantidade: 0
    },
    {
      id: 2,
      nome: "Quincas Borba",
      autor: "Machado de Assis",
      img: 'Assets/Images/Quincas.jpeg',
      preço: 40.00,
      quantidade: 0
    },
]

Lojinha = () => {
      var containerProdutos = document.getElementById('produtos');
      Produtos.map((val) => {
        containerProdutos.innerHTML+= `
            <div class = "produto-single c-carrossel-simple">
              <a class="Clicavel" key=`+val.id+` href="#">
                <img src="`+val.img+`"/>
                <div class="descricao">
                  <p>`+val.nome+`</p>
                  <p class="autor">`+val.autor+`</p>
                </div>
                <div>
                  <p class="preco"> R$`+val.preço+`</p>
                </div>
              </a>
            </div>
        `;
      })
    }
    Lojinha();

Carrinho = () =>{
  var containerCarrinho = document.getElementById('Carrinho');
  containerCarrinho.innerHTML = "";
      Produtos.map((val) => {
        if(val.quantidade > 0){
          containerCarrinho.innerHTML+= `
              <p>Nome:`+val.nome+` | quantidade:`+val.quantidade+`</p> 
          `;  
        }
      })
}
    Carrinho();

var links = document.getElementsByClassName("Clicavel")

for(var i= 0; i < links.length; i++){
  links[i].addEventListener('click', function(){
    let [key] = this.getAttribute('key');
    Produtos[key].quantidade++;
    Carrinho();
    return false;
  });
};