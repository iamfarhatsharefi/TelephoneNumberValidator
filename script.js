document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const userInputField = document.getElementById('user-input');
    const resultsDiv = document.getElementById('results-div');

    checkBtn.addEventListener('click', () => {
        const userInput = userInputField.value.trim();

        if (!userInput) {
            alert('Please provide a phone number');
            return;
        }

        const validPhonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

        if (validPhonePattern.test(userInput)) {
            resultsDiv.textContent = `Valid US number: ${userInput}`;
            resultsDiv.style.color = '#8bc34a';  
        } else {
            resultsDiv.textContent = `Invalid US number: ${userInput}`;
            resultsDiv.style.color = '#f44336';
        }
    });

    clearBtn.addEventListener('click', () => {
        userInputField.value = '';
        resultsDiv.textContent = '';
        userInputField.focus();
    });
});
