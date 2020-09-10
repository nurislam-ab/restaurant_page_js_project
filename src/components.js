const UIComponents = (() => {
  const getHeading = (headerType, headerText, headerClass = '', headerId = '') => {
    const headerElement = document.createElement(`${headerType}`);

    if (headerId === '') {
      headerElement.removeAttribute('id');
    } else {
      headerElement.id = `${headerId}`;
    }

    if (headerClass === '') {
      headerElement.removeAttribute('class');
    } else {
      headerElement.className = `${headerClass}`;
    }

    headerElement.innerHTML = `${headerText}`;
    headerId = (typeof headerId !== 'undefined') ? headerId : 1;
    return headerElement;
  };

  const getImage = (imgSrc, imgClass = '', imgAltText = '', imgId = '') => {
    const imageBlock = document.createElement('img');

    imageBlock.className = `${imgClass}`;
    imageBlock.alt = `${imgAltText}`;
    imageBlock.setAttribute('src', `${imgSrc}`);

    if (imgId === '') {
      imageBlock.removeAttribute('id');
    } else {
      imageBlock.id = `${imgId}`;
    }

    return imageBlock;
  };

  const getParagraph = (paragraphClassName, paragraphText) => {
    const paragraphBlock = document.createElement('p');
    paragraphBlock.className = `${paragraphClassName}`;
    paragraphBlock.innerHTML = `${paragraphText}`;
    return paragraphBlock;
  };

  const getWrapper = (wrapperType, wrapperClass = '', wrapperId = '') => {
    const blockWrapper = document.createElement(`${wrapperType}`);

    if (wrapperClass === '') {
      blockWrapper.removeAttribute('class');
    } else {
      blockWrapper.className = `${wrapperClass}`;
    }

    if (wrapperId === '') {
      blockWrapper.removeAttribute('id');
    } else {
      blockWrapper.id = `${wrapperId}`;
    }

    return blockWrapper;
  };

  const getLink = (linkHref, linkText, linkClass = '', linkId = '') => {
    const link = document.createElement('a');
    link.setAttribute('href', `${linkHref}`);
    link.innerHTML = `${linkText}`;

    if (linkId === '') {
      link.removeAttribute('id');
    } else {
      link.id = `${linkId}`;
    }

    if (linkClass === '') {
      link.removeAttribute('class');
    } else {
      link.classList.add(`${linkClass}`);
    }

    return link;
  };

  const getProductCard = (imgSrc, imgAltText, headerText, previewText, price) => {
    const productCard = getWrapper('div', 'product-card');
    const productImageWrapper = getWrapper('div', 'product-image-block');
    const productPreviewWrapper = getWrapper('div', 'product-preview');
    const productImage = getImage(`${imgSrc}`, 'product-image', `${imgAltText}`);
    const productTitle = getHeading('h3', `${headerText}`, 'product-title');
    const productPreviewText = getWrapper('span', 'product-preview-text');
    const productPrice = getWrapper('strong', 'product-price');
    productPreviewText.innerHTML = `${previewText}`;
    productPrice.innerHTML = `$ ${price}`;

    productImageWrapper.append(productImage);
    productPreviewWrapper.append(productTitle);
    productPreviewWrapper.append(productPreviewText);
    productPreviewWrapper.append(productPrice);
    productCard.append(productImageWrapper);
    productCard.append(productPreviewWrapper);

    return productCard;
  };

  const getInputField = (fieldType, fieldName = '', fieldClass = '', fieldPlaceholder = '') => {
    const field = document.createElement('input');
    field.setAttribute('type', `${fieldType}`);

    if (fieldName === '') {
      field.removeAttribute('name');
    } else {
      field.setAttribute('name', `${fieldName}`);
    }

    if (fieldPlaceholder === '') {
      field.removeAttribute('placeholder');
    } else {
      field.setAttribute('placeholder', `${fieldPlaceholder}`);
    }

    if (fieldClass === '') {
      field.removeAttribute('class');
    } else {
      field.classList.add(`${fieldClass}`);
    }

    return field;
  };

  const getTextarea = (fieldName = '', fieldClass = '', fieldPlaceholder = '') => {
    const field = document.createElement('textarea');

    if (fieldName === '') {
      field.removeAttribute('name');
    } else {
      field.setAttribute('name', `${fieldName}`);
    }

    if (fieldPlaceholder === '') {
      field.removeAttribute('placeholder');
    } else {
      field.setAttribute('placeholder', `${fieldPlaceholder}`);
    }

    if (fieldClass === '') {
      field.removeAttribute('class');
    } else {
      field.classList.add(`${fieldClass}`);
    }

    return field;
  };

  return {
    getHeading,
    getImage,
    getParagraph,
    getWrapper,
    getLink,
    getProductCard,
    getInputField,
    getTextarea,
  };
})();

export default UIComponents;