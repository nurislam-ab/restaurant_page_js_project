import UIComponents from './components';

const Footer = (() => {
  const services = ['Order pickup', 'Order delivery', 'Events', 'Catering', 'Uniqure orders', 'Cooking courses'];
  const addressList = [];

  const getLogo = () => {
    const col = UIComponents.getWrapper('div', 'col');
    const logo = UIComponents.getLink('#home', 'Dreams', 'nav-logo');
    const logoSpan = UIComponents.getWrapper('span');
    logoSpan.innerHTML = 'Restaurant & BBQ';

    col.classList.add('logo-wrapper');

    col.append(logo);
    col.append(logoSpan);

    return col;
  };

  const getServices = () => {
    const col = UIComponents.getWrapper('div', 'col');
    const heading = UIComponents.getHeading('h3', 'Our services', 'title');
    col.append(heading);

    services.forEach((service) => {
      service = UIComponents.getLink('#', `${service}`, 'footer-link');
      col.append(service);
    });

    return col;
  };

  const getCompany = () => {
    const col = UIComponents.getWrapper('div', 'col');
    const heading = UIComponents.getHeading('h3', 'Our restaurant', 'title');
    const link1 = UIComponents.getLink('#contact', 'Get in touch', 'footer-link');
    const link2 = UIComponents.getLink('#about', 'About', 'footer-link');
    col.append(heading);
    col.append(link1);
    col.append(link2);

    return col;
  };

  const getAddress = () => {
    const col = UIComponents.getWrapper('div', 'col');
    const address = UIComponents.getWrapper('span', 'footer-span');
    const tel = UIComponents.getLink('tel: + 998 99 123-4567', '+ 998 99 123-4567', 'footer-link');
    const email = UIComponents.getLink('mailto:nurislam@usa.com', 'nurislam@usa.com', 'footer-link');
    const heading = UIComponents.getHeading('h3', 'Address', 'title');

    address.innerHTML = '34, New life str, Old city square, SHX dist, Stone city, DC';

    addressList.push(heading, address, tel, email);

    addressList.forEach((item) => {
      col.append(item);
    });

    return col;
  };

  const getFooter = () => {
    const footer = UIComponents.getWrapper('footer', 'footer');
    const row = UIComponents.getWrapper('div', 'row');

    row.append(getLogo());
    row.append(getServices());
    row.append(getCompany());
    row.append(getAddress());
    footer.append(row);
    return footer;
  };

  return {
    getFooter,
  };
})();

export default Footer;