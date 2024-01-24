// jouw code hier

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form_contact');
    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const termsCheckbox = document.getElementById('terms');
    const submitButton = document.getElementById('btnSubmit');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });


    firstnameInput.addEventListener('focus', highlightField);
    firstnameInput.addEventListener('blur', validateFirstname);

    lastnameInput.addEventListener('focus', highlightField);
    lastnameInput.addEventListener('blur', validateLastname);
    
    emailInput.addEventListener('focus', highlightField);
    emailInput.addEventListener('blur', validateEmail);

    phoneInput.addEventListener('focus', highlightField);
    phoneInput.addEventListener('blur', validatePhone);


    function highlightField(event) {
        const input = event.target;
        const label = input.previousElementSibling;
        input.style.backgroundColor = 'yellow';
        label.style.fontWeight = 'bold';
    }

    function validateFirstname() {
        const input = firstnameInput;
        const label = input.previousElementSibling;
        if (input.value.trim() === '') {
            input.style.backgroundColor = 'red';
        }
    }

    function validateLastname() {
        const input = lastnameInput;
        const label = input.previousElementSibling;
        if (input.value.trim() === '') {
            input.style.backgroundColor = 'red';
        }
    }

    function validateEmail() {
        const input = emailInput;
        const label = input.previousElementSibling;
        if (input.value.trim() === '') {
            input.style.backgroundColor = 'red';
        }
    }

    function validatePhone() {
        const input = phoneInput;
        const label = input.previousElementSibling;
        if (input.value.trim() === '') {
            input.style.backgroundColor = 'red';
        }
    }

    function validateTerms() {
        submitButton.disabled = !termsCheckbox.checked;
    }


});

