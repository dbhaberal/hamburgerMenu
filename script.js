document.querySelector('.hamburger-btn').addEventListener('click', (e) => {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.btn-line-top').classList.toggle('rotate-top');
    document.querySelector('.btn-line-bottom').classList.toggle('rotate-bottom');
  });
  