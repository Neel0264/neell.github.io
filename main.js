document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#showTextButton');
    const additionalText = document.querySelector('#additionalText');
    
    button.addEventListener('click', function() {
        additionalText.style.display = 'block';
    });
});

