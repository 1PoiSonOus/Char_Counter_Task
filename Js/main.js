const textArea = document.getElementById('textArea');
const charCount = document.getElementById('charCount');
const charRemaining = document.getElementById('charRemaining');
const maxChars = 500;

textArea.addEventListener('input', () => {
    const text = textArea.value;
    charCount.textContent = text.length;
    charRemaining.textContent = maxChars - text.length;
});