document.getElementById('check-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');

    if (!userInput) {
        console.error('Error: Please provide a phone number');
        return;
    }
    const validPhonePatterns = [
        /^1?[-.\s]?(\d{3})[-.\s]?(\d{3})[-.\s]?(\d{4})$/,
        /^1?[-.\s]?(\(\d{3}\))[-.\s]?(\d{3})[-.\s]?(\d{4})$/,
    ];

    const isValid = validPhonePatterns.some((pattern) => pattern.test(userInput));

    if (isValid) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
        resultsDiv.style.color = '#8bc34a';  
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
        resultsDiv.style.color = '#f44336';
    }
});

document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});
