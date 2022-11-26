function showMenu() {
    const menuContent = document.querySelector('.dropDownMenuContent');
    menuContent.classList.remove('invisible');
}

function hideMenu() {
    const menuContent = document.querySelector('.dropDownMenuContent');
    menuContent.classList.add('invisible');
}

export default function writeMenuDOM(buttonTitle, optionList) {
    const container = document.querySelector('#dropDownMenu');
    const menuButton = document.createElement('div');
    menuButton.classList.add('dropDownMenuButton');
    menuButton.textContent = buttonTitle;
    container.appendChild(menuButton);
    const menuContent = document.createElement('div');
    menuContent.classList.add('dropDownMenuContent');
    menuContent.classList.add('invisible');
    for (const option of optionList) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('dropDownMenuItem');
        menuItem.textContent = option;
        menuItem.addEventListener('click', () => {
            alert(`You clicked ${option} !`);
        });
        menuContent.appendChild(menuItem);
    }
    container.appendChild(menuContent);
    menuButton.addEventListener('mouseenter', showMenu);
    container.addEventListener('mouseleave', hideMenu);
}
