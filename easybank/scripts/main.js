const openHam = document.querySelector('.open-ham'),
      closeHam = document.querySelector('.close-ham'),
      navLinks = document.querySelector('.nav-links'),
      body = document.querySelector('body');
      

openHam.addEventListener('click', ()=>{
    closeHam.style.display = 'block';
    openHam.style.display = 'none';
    navLinks.style.display = 'flex';
    body.backgroundColor = 'black';
});

closeHam.addEventListener('click', ()=>{
    closeHam.style.display = 'none';
    openHam.style.display = 'block';
    navLinks.style.display = 'none';

})