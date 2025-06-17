function displayResult(message, isError = false) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = message;
        resultDiv.className = `result ${isError ? 'error' : 'success'}`;
        resultDiv.setAttribute('aria-live', 'polite');
    }
}

function findStringInsideAString(searchedString, text) {
    if (!searchedString || typeof searchedString !== 'string') {
        displayResult('Please enter a valid search term', true);
        return -1;
    }

    const index = text.toLowerCase().indexOf(searchedString.toLowerCase());

    if (index === -1) {
        displayResult(`"${searchedString}" not found in the text`, true);
    } else {
        displayResult(`"${searchedString}" found at position ${index}`);
    }

    return index;
}

export { findStringInsideAString };