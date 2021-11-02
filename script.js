// dont forget to add the <script> tags in each web page's <head>!!!
const newElement = document.createElement('HR');

const menu = document.querySelector("#homebutton");
const projects = document.querySelector("#projectsbutton");
const contact = document.querySelector("#contactbutton");

menu.classList.add("menu-button");
projects.classList.add("projects-button");
contact.classList.add("contact-button");

const selector = document.querySelector(".navlinks");

if(window.location.pathname == "/index.html" || window.location.pathname == "/")
{
    newElement.style.marginLeft = "1.2%";
    newElement.style.width = "18%";
}
else if (window.location.pathname == "/contact.html")
{
    newElement.style.marginLeft = "67.2%";
    newElement.style.width = "23.8%"; 
}
else if (window.location.pathname == "/projects.html")
{
    newElement.style.marginLeft = "31%";
    newElement.style.width = "24.5%"; 
}

selector.appendChild(newElement);


const data = {
    name: '',
    email: '',
    message: ''
} 


// input
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const readInput = (e) => {
    data[e.target.id] = e.target.value; 
    // console.log(data); 
}

nameInput.addEventListener('input', readInput);
emailInput.addEventListener('input', readInput);
messageInput.addEventListener('input',readInput);

// submit 
const form = document.querySelector("#email-form"); 
form.addEventListener('submit', e => {
    e.preventDefault(); 
    const { name, email, message} = data; 
    
    if (name === '' || email === '' || message === '')
    {
        alertMessage('All fields are important', true); 
        return; 
    } 
    if (!email.includes("@")){
        alertMessage('Invalid email', true); 
        return;
    }

    alertMessage("Sending form"); 
}); 

const body = document.querySelector('body'); 
const alertMessage = (message, error=false) => {
    const alert = document.createElement("P");
    alert.textContent = message; 
    if(error){
        alert.classList.add('alert');
    } else {
        alert.classList.add('alert-green');
    }

    body.appendChild(alert); 
    setTimeout(() => {
        alert.remove(); 
    }, 4000);

}



// // Displays an error to screen 
// const errorMessage = message => {
//     const alert = document.createElement("P");
//     alert.textContent = message; 
//     alert.classList.add('alert'); 
//     form.appendChild(alert);

//     setTimeout(() => {
//         alert.remove(); 
//     }, 4000);
// }

// const success = message => {
//     const sent = document.createElement("P");
//     sent.textContent = message;
//     sent.classList.add('alert-green');
//     form.appendChild(sent);

//     setTimeout(() => {
//         sent.remove(); 
//     }, 4000);
// }

