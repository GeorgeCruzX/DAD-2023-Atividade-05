// Função para incrementar o contador de visitas
function incrementCounter() {
    let counter = localStorage.getItem('counter');
    counter = counter ? parseInt(counter) + 1 : 1;
    localStorage.setItem('counter', counter);
    document.getElementById('counter').textContent = counter;
}

// Função para alternar entre os temas
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Verifica e aplica o tema salvo localmente ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Event listeners
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', incrementCounter);
