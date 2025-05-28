document.addEventListener('DOMContentLoaded', () => {
    const diagnosticsBtn = document.getElementById('diagnosticsBtn');
    const codeForm = document.getElementById('codeForm');
    const secretCode = document.getElementById('secretCode');
    const submitBtn = document.getElementById('submitBtn');

    // Pokazuj formularz po kliknięciu
    diagnosticsBtn.addEventListener('click', () => {
        diagnosticsBtn.style.display = 'none';
        codeForm.style.display = 'block';
    });

    // Sprawdzanie kodu
    submitBtn.addEventListener('click', checkCode);
    secretCode.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkCode();
    });

    function checkCode() {
        // Tymczasowe przekierowanie - później zmienisz na prawdziwą stronę
        if (secretCode.value.trim() === "Sigmito Urbanito") {
            window.location.href = "Glowna.html";
        } else {
            alert("Nieprawidłowy kod! Spróbuj ponownie.");
            secretCode.value = "";
        }
    }
});