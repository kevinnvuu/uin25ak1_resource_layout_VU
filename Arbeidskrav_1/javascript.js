// Kode for å vise ressursinformasjon basert på valgt kategori
function showResource(category) {
    
    const container = document.querySelector('#container');

    
    container.innerHTML = '';

    // Lagt inn for å finne ressurser som matcher kategorien
    const resource = resources.find(r => r.category.toLowerCase() === category.toLowerCase());

    //Kode lagt inn for å opprette HTML-element om det finnes en matchende ressurs
    if (resource) {
        const article = document.createElement('article');
        //Brukt article for at det skal bli penere struktur
        article.innerHTML = `
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
            <ul>${resource.sources.map(({ title, url }) => `<li><a href="${url}" target="_blank">${title}</a></li>`).join('')}</ul>
        `;
        container.appendChild(article); 
    }
}


document.addEventListener('DOMContentLoaded', () => {
    
    showResource('HTML');

    //Brukt for å kunne klikke på linkene
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showResource(event.target.textContent);
        });
    });
});

