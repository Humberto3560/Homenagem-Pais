function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = section.style.display === 'none' || section.style.display === '' ? 'block' : 'none';
        } else {
            section.style.display = 'none';
        }
    });
}
