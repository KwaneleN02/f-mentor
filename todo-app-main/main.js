const todoInput = document.querySelector('input');
const inputContainer = document.querySelector('.input');
let todoList = document.querySelector('ul');      //Grabs the UL

const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const header = document.querySelector('header');
const body = document.querySelector('body');

todoList.style.display = 'none';

const submitBtn = document.querySelector('.submit');


// Event Listener
submitBtn.addEventListener('click', addList);

moon.addEventListener('click', darkMode);
sun.addEventListener('click', lightMode);






// Functions
function addList()
{
    let listItem = document.createElement('li');     //Creates the listItem
    const deleteBtn = document.createElement('i');      //delete button
    deleteBtn.className = 'material-icons';             //Material Class
    deleteBtn.innerText = 'delete';   


    if(todoInput.value == '')
    {
        alert('Please type something');
        return false;
    }

    else
    {
        todoList.style.display = 'flex';
        const todoItems = todoList.appendChild(listItem);   //Adds list to the UL
        todoItems.innerText = todoInput.value;                //insert text to the li    
        todoItems.appendChild(deleteBtn);

        // Material Toast
        M.toast({html: ' List item has been created ', classes: 'green'}); 
     
        //Persist to local storage
        localStorage.setItem('list-Item', todoItems.innerText);

        // Clear the input!
        todoInput.value = '';
       
        // The delete function
        deleteBtn.addEventListener('click', ()=>
        {
            todoItems.remove();
            M.toast({html: ' List item deleted', classes: 'red'});
            localStorage.removeItem('list-Item'); 

            if(todoList.innerText == '' )
            { 
               todoList.style.display = 'none';   
            }
        })
       
       
    }
    
}


// Themes

function darkMode()
{
    header.style.backgroundImage = 'url(./images/bg-desktop-dark.jpg)';
    sun.style.display = 'block';
    moon.style.display = 'none';
    body.style.background = '#263238';
    todoList.style.background = '#263238';
    inputContainer.style.background = '#263238';
    todoInput.style.color = '#ffff';
}

function lightMode()
{
    header.style.backgroundImage = 'url(./images/bg-desktop-light.jpg)';
    sun.style.display = 'none';
    moon.style.display = 'block';
    body.style.background = '#ffff';
    todoList.style.background = '#ffff';
    inputContainer.style.background = '#ffff';
    todoInput.style.color = '#000000';
}


