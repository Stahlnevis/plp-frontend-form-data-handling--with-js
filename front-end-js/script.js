// Capture form submission event
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission
    if (validateForm()) {
        displaySummary();
        alert('Form submitted successfully!');
    }
});

// Real-time feedback on email validation
document.getElementById('email').addEventListener('input', function() {
    validateEmail();
});

// Real-time feedback for name input
document.getElementById('name').addEventListener('input', function() {
    validateName();
});

// Validate form
function validateForm() {
    let isValid = true;

    // Validate name
    if (!validateName()) {
        isValid = false;
    }

    // Validate email
    if (!validateEmail()) {
        isValid = false;
    }

    // Validate preferred contact method
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
    if (!contactMethod) {
        document.getElementById('contactMethodError').innerText = 'Please select a contact method';
        document.getElementById('contactMethodError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('contactMethodError').style.display = 'none';
    }

    // Validate terms and conditions
    if (!document.getElementById('terms').checked) {
        document.getElementById('termsError').innerText = 'You must accept the terms and conditions';
        document.getElementById('termsError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('termsError').style.display = 'none';
    }

    return isValid;
}

// Validate name field
function validateName() {
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        return false;
    } else {
        document.getElementById('nameError').style.display = 'none';
        return true;
    }
}

// Validate email field
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        document.getElementById('emailError').style.display = 'block';
        return false;
    } else {
        document.getElementById('emailError').style.display = 'none';
        return true;
    }
}

// Display the summary of form data
function displaySummary() {
    // Capture form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        contactMethod: document.querySelector('input[name="contactMethod"]:checked').value,
        termsAccepted: document.getElementById('terms').checked ? 'Yes' : 'No'
    };

    // Display the form data in the summary section
    document.getElementById('summaryName').innerText = formData.name;
    document.getElementById('summaryEmail').innerText = formData.email;
    document.getElementById('summaryContactMethod').innerText = formData.contactMethod;
    document.getElementById('summaryTerms').innerText = formData.termsAccepted;
}
