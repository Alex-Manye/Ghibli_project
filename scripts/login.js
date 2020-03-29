'use strict';


const handleMessages = user => {
    const messageContainer = document.querySelector(".errors-container");
    messageContainer.innerHTML = '';

    const message = document.createElement('p');
    if (user) {
        message.classList.add('correct-message')
        message.innerHTML = `Hello, ${user.email}`
    } else {
        message.innerHTML = "email and/or password error"
    }
    messageContainer.appendChild(message);
}

const login = (event) => {
    event.preventDefault();

    const usersDB = JSON.parse(localStorage.getItem('users'));
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const user = usersDB.find(element => element.email === emailInput.value && element.password === passwordInput.value);

    handleMessages(user);
}