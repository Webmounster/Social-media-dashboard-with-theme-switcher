const toggle = document.querySelector('#chektoggle');
const body = document.body;
const spanMode = document.querySelector('.mode');
const cards = document.querySelectorAll('.card');
const miniCards = document.querySelectorAll('.miniCard');
let currentMode = localStorage.getItem('dark');

if (currentMode === 'true') {
    body.classList.add('dark');
    spanMode.textContent = 'Dark Mode';
}

toggle.addEventListener('click', () => {
    let modeDark = body.classList.toggle('dark');
    if (modeDark) {
        spanMode.textContent = 'Dark Mode';
        localStorage.setItem('dark', 'true');
    } else {
        spanMode.textContent = 'Light Mode';
        localStorage.setItem('dark', 'false');

    }
    cards.forEach(element => {
        element.classList.toggle('giro');
    });
    miniCards.forEach(element => {
        element.classList.toggle('giro');
    });

})