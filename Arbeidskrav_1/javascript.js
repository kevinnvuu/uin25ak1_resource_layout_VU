function showResource(category) {
    const container = document.querySelector('#container');
    container.innerHTML = '';

    // Filtrer ressurser som matcher den valgte kategorien
    const filteredResources = resources
        .filter(r => r.category.toLowerCase() === category.toLowerCase()) 
        .map(resource => `
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources.map(({ title, url }) => `<li><a href="${url}" target="_blank">${title}</a></li>`).join('')}
            </ul>
        `)
        .join(''); // Gjør om array til en enkel HTML-streng

    // Legg til generert HTML i containeren
    container.innerHTML = filteredResources;
}

document.addEventListener('DOMContentLoaded', () => {
    // Filtrer og vis kun HTML-ressurser når siden lastes
    showResource('HTML');

    // Hent alle navigasjonslenker
    const navLinks = document.querySelectorAll('nav a');

    // Legg til 'active' klassen på HTML-knappen ved start
    navLinks.forEach(link => {
        if (link.textContent.trim() === 'HTML') {
            link.classList.add('active');
        }

        // Event listener for navigasjonslenker
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Fjern 'active' fra alle linker
            navLinks.forEach(navLink => navLink.classList.remove('active'));

            // Legg til 'active' på klikket lenke
            link.classList.add('active');

            // Oppdater innholdet
            showResource(event.target.textContent);
        });
    });
});
