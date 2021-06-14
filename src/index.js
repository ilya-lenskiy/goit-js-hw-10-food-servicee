import dishesTpl from './templates/template-of-dish.hbs';
import menu from './menu.json';
import './sass/main.scss';

const dishesContainer = document.querySelector('.js-menu');
const menuPage = document.querySelector('body');
const themeSwitcher = document.getElementById('theme-switch-toggle');

const dishesMarkup = createDishesCardsMarkup(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function createDishesCardsMarkup(menu) {
  return dishesTpl(menu);
}

dishesContainer.insertAdjacentHTML('afterbegin', dishesMarkup);

themeSwitcher.addEventListener('change', e => {
  if (e.target.checked) {
    menuPage.classList.add(Theme.DARK);
    menuPage.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    menuPage.classList.add(Theme.LIGHT);
    menuPage.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
});

const currentTheme = localStorage.getItem('Theme');

setUpProperThemeOfPage(currentTheme);

function setUpProperThemeOfPage(currentTheme) {
    if (!currentTheme) {
        menuPage.classList.add(Theme.LIGHT);
    } else {
        menuPage.classList.add(currentTheme);
    }
}

moveProperPositionOfToggle(currentTheme);

function moveProperPositionOfToggle(currentTheme) {
  if (currentTheme === Theme.DARK) {
    console.log((themeSwitcher.checked = true));
  }
}
