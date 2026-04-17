// DATABASE DE FILMES (Gestão de Dados)
const movies = [
    { title: "O Épico", genre: "Ação", img: "https://via.placeholder.com/300x450" },
    { title: "Noite Estelar", genre: "Sci-Fi", img: "https://via.placeholder.com/300x450" },
    { title: "Caminhos", genre: "Drama", img: "https://via.placeholder.com/300x450" },
    { title: "Risos", genre: "Comédia", img: "https://via.placeholder.com/300x450" }
];

const faqs = [
    { q: "Como assinar?", a: "Você pode assinar clicando no botão de cadastro." },
    { q: "Quais dispositivos suportados?", a: "Smart TVs, Smartphones e Web." }
];

// RENDERIZAÇÃO DINÂMICA
function initApp() {
    const grid = document.getElementById('movie-grid');
    const faqContainer = document.getElementById('faq-container');

    // Render Filmes
    movies.forEach(movie => {
        const article = document.createElement('article');
        article.className = 'movie-card';
        article.innerHTML = `
            <img src="${movie.img}" alt="Poster do filme ${movie.title}" style="width:100%">
            <div style="padding: 1rem">
                <h3>${movie.title}</h3>
                <p>${movie.genre}</p>
            </div>
        `;
        grid.appendChild(article);
    });

    // Render FAQ
    faqs.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'accordion-item';
        div.innerHTML = `
            <button class="accordion-header" aria-expanded="false" onclick="toggleAccordion(this)">
                ${item.q}
            </button>
            <div class="accordion-content">${item.a}</div>
        `;
        faqContainer.appendChild(div);
    });

    setupScrollReveal();
}

// ACESSIBILIDADE: TAMANHO DA FONTE
let currentFontSize = 100;
function changeFontSize(action) {
    currentFontSize += (action === 'increase' ? 10 : -10);
    document.body.style.fontSize = `${currentFontSize}%`;
}

// MODO ALTO CONTRASTE
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// ACORDEÃO (Expandables)
function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    
    btn.setAttribute('aria-expanded', !isExpanded);
    content.classList.toggle('active');
}

// SCROLL REVEAL SIMPLES
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.movie-card').forEach(card => observer.observe(card));
}

window.onload = initApp;
