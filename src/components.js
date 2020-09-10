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

  return {
    getHeading,
    getImage,
    getParagraph,
    getWrapper,
    getLink,
  };
})();

export default UIComponents;