document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('user-input');
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsDiv = document.getElementById('results-div');

  checkBtn.addEventListener('click', () => {
    const phoneNumber = userInput.value.trim();

    if (!phoneNumber) {
      // eslint-disable-next-line no-alert
      alert('Please provide a phone number');
      return;
    }

    const validPatterns = [
      /^1?\s?\d{3}-\d{3}-\d{4}$/,
      /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,
      /^1?\s?\d{10}$/,
      /^1?\s?\d{3}\s\d{3}\s\d{4}$/,
    ];

    const isValid = validPatterns.some((pattern) => pattern.test(phoneNumber));
    const resultText = isValid
      ? `Valid US number: ${phoneNumber}`
      : `Invalid US number: ${phoneNumber}`;

    resultsDiv.textContent = resultText;
  });

  clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
    userInput.value = '';
  });
});
  