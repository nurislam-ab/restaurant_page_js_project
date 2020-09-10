import UIComponents from './components';
import Product from './product';

const Menu = (() => {
  const img1 = '../dist/assets/images/properpizza_pizza_margherita.png';
  const img2 = '../dist/assets/images/image_2.png';
  const img3 = '../dist/assets/images/image_3.png';
  const img4 = '../dist/assets/images/image_4.png';
  const img5 = '../dist/assets/images/image_5.png';
  const img6 = '../dist/assets/images/image_6.png';
  const img7 = '../dist/assets/images/image_7.png';
  const img8 = '../dist/assets/images/image_8.png';
  const img9 = '../dist/assets/images/image_9.png';
  const img10 = '../dist/assets/images/image_12.png';
  const paragraph2 = 'Our Specialist in yoga you can book with them your Classes. Dummy texts';

  const item1 = Product(img1, 'Product 1', 'Product 1', paragraph2, 12);
  const item2 = Product(img2, 'Product 1', 'Product 1', paragraph2, 12);
  const item3 = Product(img10, 'Product 1', 'Product 1', paragraph2, 12);
  const item4 = Product(img4, 'Product 1', 'Product 1', paragraph2, 12);
  const item5 = Product(img5, 'Product 1', 'Product 1', paragraph2, 12);
  const item6 = Product(img6, 'Product 1', 'Product 1', paragraph2, 12);
  const item7 = Product(img7, 'Product 1', 'Product 1', paragraph2, 12);
  const item8 = Product(img8, 'Product 1', 'Product 1', paragraph2, 12);
  const item9 = Product(img9, 'Product 1', 'Product 1', paragraph2, 12);
  const item10 = Product(img3, 'Product 1', 'Product 1', paragraph2, 12);

  const products = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];

  const getMenuItems = () => {
    const row = UIComponents.getWrapper('div', 'row');

    products.forEach((product) => {
      product = UIComponents.getProductCard(product.img,
        product.imgAlt,
        product.title,
        product.previewText,
        product.price);
      row.append(product);
    });

    return row;
  };

  const getMenuContent = () => {
    const mainContent = document.getElementById('content');
    const content = UIComponents.getWrapper('section', 'content', 'menu');

    content.classList.add('products-menu');
    content.append(getMenuItems());
    mainContent.append(content);

    return content;
  };

  return {
    getMenuContent,
  };
})();

export default Menu;