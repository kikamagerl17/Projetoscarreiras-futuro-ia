document.addEventListener('DOMContentLoaded', () => {

  /* --- ANIMAÇÃO DE REVELAÇÃO AO ROLAR (REVEAL ON SCROLL) --- */

  // Função que adiciona a classe 'visible' quando o elemento entra na tela.
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Para a observação após a animação.
      }
    });
  };

  // Configura o observer para disparar quando 10% do elemento estiver visível.
  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.1,
  });

  // Seleciona todos os elementos que terão a animação.
  const elementsToReveal = document.querySelectorAll('.card, blockquote, .cards-profissoes-destaque, #impacto p, form');

  // Aplica o observer a cada elemento.
  elementsToReveal.forEach(element => {
    revealObserver.observe(element);
  });


  /* --- DESTAQUE DO LINK ATIVO NA NAVEGAÇÃO (ACTIVE NAV LINK) --- */

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');

  // Função que atualiza o link ativo com base na seção visível.
  const navCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentSectionId = entry.target.id;
        
        navLinks.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active-link');
          }
        });
      }
    });
  };

  // Configura o observer para disparar quando 60% da seção estiver visível.
  const navObserver = new IntersectionObserver(navCallback, {
    root: null,
    threshold: 0.6
  });

  // Aplica o observer a cada seção.
  sections.forEach(section => {
    navObserver.observe(section);
  });


  /* --- FUNCIONALIDADE DO FORMULÁRIO DE CONTATO --- */

  const contactForm = document.querySelector('#contato form');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página.
    alert('Obrigado pelo seu contato! Sua mensagem foi enviada.');
    contactForm.reset(); // Limpa o formulário.
  });

});