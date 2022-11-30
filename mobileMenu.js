export default function createhamburgerMenu(parent, menuList) {
    const container = document.querySelector(parent);
    const hamburgerButton = document.createElement('div');
    hamburgerButton.textContent = '≡';
    hamburgerButton.classList.add('hamburgerButton');
    hamburgerButton.addEventListener('click', showSideMenu);
    container.appendChild(hamburgerButton);

    const sideMenu = document.createElement('div');
    sideMenu.classList.add('sideMenu');
    const sideMenuTop = document.createElement('div');
    sideMenuTop.classList.add('sideMenuTop');
    sideMenuTop.textContent = 'X';
    sideMenuTop.addEventListener('click', hideSideMenu);
    sideMenu.appendChild(sideMenuTop);
    const sideMenuList = document.createElement('div');
    sideMenuList.classList.add('sideMenuList');
    for (const item of menuList) {
        const li = document.createElement('div');
        li.classList.add('sideMenuListItem');
        li.textContent = item;
        li.addEventListener('click', () => {
            menuItemOnClick(item);
        });
        sideMenuList.appendChild(li);
    }
    sideMenu.appendChild(sideMenuList);
    container.appendChild(sideMenu);
}

function hideSideMenu() {
    const sideMenu = document.querySelector('.sideMenu');
    sideMenu.classList.remove('out');
}

function showSideMenu() {
    const sideMenu = document.querySelector('.sideMenu');
    sideMenu.classList.add('out');
}

function menuItemOnClick(item) {
    alert(`You clicked ${item}!`);
}
