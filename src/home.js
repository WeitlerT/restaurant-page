function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Best imaginary food never created';

    const para2 = document.createElement('p');
    para2.textContent = 'Established in 2023';

    const para3 = document.createElement('p');
    para3.textContent = 'Check contact us for more details!';

    const img = document.createElement('img');
    img.src = 'images/frenchfries.jpg'

    home.appendChild(paragraph);
    home.appendChild(para2);
    home.appendChild(img);
    home.appendChild(para3);

    return home;
}

function loadHome() {
    const content = document.querySelector('#content');
    content.textContent = '';
    content.appendChild(createHome());
}

export default loadHome;