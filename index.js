import createDropdownMenu from './dropDownMenu.js';
import createImageSlider from './imageSlider.js';
import createhamburgerMenu from './mobileMenu.js';

createDropdownMenu('#dropDownMenuTop', '#dropDownMenu .WebContent', 'Drop-down1', ['Option 1', 'Option 22', 'Option 333']);
createDropdownMenu('#dropDownMenuTop', '#dropDownMenu .WebContent', 'Drop-down2', ['Option A', 'Option B']);

createhamburgerMenu('#mobileMenu', ['Option 1', 'Option 22', 'Option 333', 'Option 4444']);

createImageSlider('#imageSlider', ['./img/demo1.jpeg', './img/demo2.jpeg', './img/demo3.jpg', './img/demo4.jpg', './img/demo5.jpg']);
