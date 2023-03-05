function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const header = document.createElement('h2');
    header.classList.add('contact-header');
    header.textContent = "Contact Us";

    const address = document.createElement('p');
    address.textContent = "🏠 555 Random Street";

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "📞 423-452-1423";

    const map = document.createElement('img');
    map.src = 'images/map.png';

    const openTimes = document.createElement('p');
    openTimes.textContent = "Open Mon-Sat: 8:00AM - 7:00PM";
    openTimes.classList.add("open-times");

    contact.appendChild(header);
    contact.appendChild(address);
    contact.appendChild(phoneNumber);
    contact.appendChild(map);
    contact.appendChild(openTimes);

    return contact;
}


function loadContact() {
    const content = document.querySelector('#content');
    content.textContent = '';
    content.appendChild(createContact());
}

export default loadContact;