var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


  // alternado o fundo da imagem com preto ou branco//
  

  document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    let isBlack = true;
  
    toggleBtn.addEventListener('click', function() {
      isBlack = !isBlack;
  
      if (isBlack) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white'; // Altera a cor do texto para branco
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'; // Altera a cor do texto para preto
      }
    });
  });
  
  