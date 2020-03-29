'use strict';
 
class Signup {
    constructor() {
        this.nameInput = document.querySelector('#username');
        this.emailInput = document.querySelector('#email');
        this.passwordInput = document.querySelector('#password');
        this.repeatPasswordInput = document.querySelector('#passwordRepeat');
        this.buttonInput = document.querySelector('#signup-button');
        this.errorsWrapper = document.querySelector('.errors-container');
    }

    saveData = (event) => {
        event.preventDefault()
        //recoger valores de inputs
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        //crear una instancia de User
        const newUser = new User(name, type, email, password);
        //console.log(newUser)

        //almacenar datos en local storage
        let usersDB = JSON.parse(localStorage.getItem('users')); //recogemos del local storage

        if (usersDB) { //miro si hay usuarios registrados
            usersDB.push(newUser); //añado a la lista
        } else {
            usersDB = [newUser]; //asigno un array con mi usuario
        }
        localStorage.setItem('users', JSON.stringify(usersDB)); //envío a localStorage mi base de datos

        //vaciar formulario
        this.nameInput.value = '';
        this.emailInput.value = '';
        this.passwordInput.value = '';
        this.repeatPasswordInput.value = '';

        validator.checkErrors(true);
    }

    handleInputsValues = () => {
        this.emailInput.addEventListener('input', event => {
            const errors = validator.validateValidEmail(event.target.value)
            if (!('invalidEmailError' in errors)) {
                validator.validateUniqueEmail(event.target.value)
            }
            this.handleErrorMessages();
            this.handleIsValid();
        })
        this.passwordInput.addEventListener('input', event => {
            validator.validatePassword(event.target.value);
            validator.validatePasswordRepeat(event.target.value, this.repeatPasswordInput.value);
            this.handleErrorMessages();
            this.handleIsValid();
        })
        this.repeatPasswordInput.addEventListener('input', event => {
            const errors = validator.validatePasswordRepeat(this.passwordInput.value, event.target.value);
            this.handleErrorMessages();
            this.handleIsValid();
        })
    }
    handleErrorMessages = () => {
        this.errorsWrapper.innerHTML = '';
        const errors = validator.checkErrors()
        for (const prop in errors) {
            const error = document.createElement('p');
            error.innerHTML = errors[prop];
            this.errorsWrapper.appendChild(error);
        }
    }

    handleIsValid = () => {
        const errors = validator.checkErrors();
        if (Object.keys(errors).length === 0) { 
            this.buttonInput.removeAttribute("disabled");
        } else {
            this.buttonInput.setAttribute('disabled', '');
        }
    }

}

const signup = new Signup();
window.addEventListener('load', signup.handleInputsValues);
