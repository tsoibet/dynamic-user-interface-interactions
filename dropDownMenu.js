export default function createDropdownMenu(parent, target, buttonTitle, optionList) {
    const container = document.querySelector(parent);
    const menu = document.createElement('div');
    menu.classList.add('dropDownMenu');
    const menuButton = document.createElement('div');
    menuButton.classList.add('dropDownMenuButton');
    menuButton.textContent = buttonTitle;
    menu.appendChild(menuButton);
    const menuContent = document.createElement('div');
    menuContent.classList.add('dropDownMenuContent');
    for (const option of optionList) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('dropDownMenuItem');
        menuItem.textContent = option;
        menuItem.addEventListener('click', () => {
            menuItemOnClick(option, target);
            menuContent.style.display = 'none';
            setTimeout(() => {
                menuContent.style.display = '';
            }, 1);
        });
        menuContent.appendChild(menuItem);
    }
    menu.appendChild(menuContent);
    container.appendChild(menu);
}

function menuItemOnClick(item, target) {
    const page = document.querySelector(target);
    page.textContent = item;
}
