document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      // Seleciona o ID da seção relacionada ao link
      const targetId = link.getAttribute('href');
      // Verifica se a seção já foi carregada
      if (!document.querySelector(targetId)) {
        // Cria o elemento div para a seção
        const section = document.createElement('div');
        section.id = targetId.slice(1);
        section.classList.add('section');
        // Adiciona a div ao final da página
        document.querySelector('main').appendChild(section);
        // Mostra o pre-loader enquanto a seção é carregada
        const preloader = document.createElement('div');
        preloader.classList.add('preloader');
        section.appendChild(preloader);
        // Carrega o conteúdo da seção usando fetch
        fetch(targetId.slice(1) + '.html')
          .then(response => response.text())
          .then(html => {
            // Remove o pre-loader e adiciona o conteúdo da seção
            section.removeChild(preloader);
            section.innerHTML = html;
          });
      }
    });
  });