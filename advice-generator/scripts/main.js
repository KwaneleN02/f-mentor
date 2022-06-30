let btn = document.querySelector('.btn-floating'), 

adviseHeader = document.querySelector('strong'),

adviseContent = document.querySelector('.card-content'),

output = document.querySelector('.output');



btn.addEventListener('click', ()=>
{

fetch('https://api.adviceslip.com/advice')
 
    .then((res) => 
    {
        return res.json();
    })

    .then((data) =>
    {
       adviseHeader.innerText = `ADVISE # ${data.slip.id}`;
       adviseContent.innerHTML = data.slip.advice; 
    })

   

});