import Home from './home';
import Menu from './menu';
import Contact from './contacts';
import Nav from './nav';
import Footer from './footer';

import './assets/css/reset.scss';
import './assets/css/styles.scss';

const getHomeContent = () => {
  Home.getHomeContent();
};

const getMenuContent = () => {
  Menu.getMenuContent();
};

const getContactContent = () => {
  Contact.getContactContent();
};

const getNavigationMenu = () => {
  document.body.appendChild(Nav.getMainNavigation());
};

const getFooter = () => {
  document.body.appendChild(Footer.getFooter());
};

const tabsHandler = (elementId = '') => {
  const tabHolder = document.getElementById('content');
  switch (elementId) {
    case 'home':
      tabHolder.removeChild(tabHolder.firstChild);
      getHomeContent();
      break;
    case 'menu':
      tabHolder.removeChild(tabHolder.firstChild);
      getMenuContent();
      break;
    case 'contact':
      tabHolder.removeChild(tabHolder.firstChild);
      getContactContent();
      break;
    default:
      getHomeContent();
      break;
  }
};

window.openTab = (id) => {
  tabsHandler(id);
};

window.onload = () => {
  getNavigationMenu();
  const mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'content');
  document.body.appendChild(mainContent);
  tabsHandler();
  getFooter();
};