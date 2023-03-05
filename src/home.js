function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const header = document.createElement('h2');
    header.textContent = 'Home';

    home.appendChild(header);

    return home;
}

function loadHome() {
    const content = document.querySelector('#content');
    content.textContent = '';
    content.appendChild(createHome());
}

export default loadHome;