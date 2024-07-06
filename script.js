function toggleSection(id) {
    const section = document.getElementById(id);
    if (section.style.display === 'none' || getComputedStyle(section).display === 'none') {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        section.style.display = 'none';
    }
}

function downloadFile() {
    const link = document.createElement('a');
    link.href = 'codigo.zip'; // Caminho para o arquivo de código que você criar
    link.download = 'codigo.zip';
    link.click();
}

// Oculta todas as seções exceto a primeira ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');
    for (let section of sections) {
        if (section.id !== 'saiba-mais') { // Exceção para a primeira aba
            section.style.display = 'none';
        }
    }
});
