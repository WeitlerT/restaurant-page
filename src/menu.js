function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const header = document.createElement('h2');
    header.classList.add('menu-header');
    header.textContent = "Menu";

    menu.appendChild(header);
    menu.appendChild(addMenuItem('Spaghetti','Its spaghetti'));    
    menu.appendChild(addMenuItem('Burger','Its a burger'));  
    menu.appendChild(addMenuItem('Fries','Its Fries'));
    menu.appendChild(addMenuItem('Pizza','Its Pizza'));    

    return menu;
}

function addMenuItem(name, desc) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.classList.add('item-title');
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.classList.add('item-desc');
    foodDescription.textContent = desc;
  
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function loadMenu() {
    const content = document.querySelector('#content');
    content.textContent = '';
    content.appendChild(createMenu());
}

export default loadMenu;