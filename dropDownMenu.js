function showMenu(id) {
    const menuContent = document.querySelector(`#${id}`);
    menuContent.classList.remove('invisible');
}

function hideMenu(id) {
    const menuContent = document.querySelector(`#${id}`);
    menuContent.classList.add('invisible');
}

export default function createDropdownMenu(parent, target, buttonTitle, optionList) {
    const container = document.querySelector(parent);
    const menu = document.createElement('div');
    menu.classList.add('dropDownMenu');
    const menuButton = document.createElement('div');
    menuButton.classList.add('dropDownMenuButton');
    menuButton.textContent = buttonTitle;
    menu.appendChild(menuButton);
    const menuContent = document.createElement('div');
    menuContent.id = `${buttonTitle}-list`;
    menuContent.classList.add('dropDownMenuContent');
    menuContent.classList.add('invisible');
    for (const option of optionList) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('dropDownMenuItem');
        menuItem.textContent = option;
        menuItem.addEventListener('click', () => {
            menuItemOnClick(option, target);
            hideMenu(menuContent.id);
        });
        menuContent.appendChild(menuItem);
    }
    menu.appendChild(menuContent);
    menuButton.addEventListener('mouseenter', () => {
        showMenu(menuContent.id);
    });
    menu.addEventListener('mouseleave', () => {
        hideMenu(menuContent.id);
    });
    container.appendChild(menu);
}

function menuItemOnClick(item, target) {
    const page = document.querySelector(target);
    page.textContent = item;
}
