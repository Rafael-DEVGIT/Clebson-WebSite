// JS. TEXTO MUDANDO SOZINHO - TOPO//


const textos = [
    "Bem-vindo ao nosso site!",
    "Esperamos que você goste!",
    "Confira nossas novidades!",
    "Obrigado pela visita!"
  ];

  let index = 0;

  function mudarTexto() {
    const elementoTexto = document.getElementById("texto");
    elementoTexto.textContent = textos[index];
    index = (index + 1) % textos.length; 
  }


  setInterval(mudarTexto, 4000);

  mudarTexto();

// jS. NAVBAR //
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }


// JS. SLIDE // 

  let currentSlide = 0;

  // Função para mover o slide
  function moverSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
  
    // Atualizar o índice do slide atual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  
    // Atualizar a posição do slider
    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  // Função para avançar automaticamente o slide
  function avancarSlideAutomaticamente() {
    moverSlide(1); // Avançar para o próximo slide
  }
  
  // Configurar o temporizador (ex.: 3000ms = 3 segundos)
  setInterval(avancarSlideAutomaticamente, 9000);



  // SCRIPT ROLAGEM //

    // Para navegadores que não suportam scroll-behavior no CSS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove o #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth" // Rolagem suave
          });
        }
      });
    });


    // Script ENVIAR EMAIL//
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o comportamento padrão de envio do formulário
      
      var formData = new FormData(this);
      
      fetch("https://formsubmit.co/clebsonbastoscorretordeimoveis@gmail.com", {
        method: "POST",
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          alert("Mensagem enviada com sucesso!");
          document.getElementById("contact-form").reset(); // Opcional: limpar o formulário após o envio
        } else {
          alert("Falha ao enviar a mensagem.");
        }
      })
      .catch(error => {
        console.error("Erro ao enviar o formulário:", error);
        alert("Ocorreu um erro. Tente novamente.");
      });
    });
