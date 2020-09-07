const UIComponents = (() => {
  const getHeading = (headerType, headerText, headerClass, headerId) => {
    const headerElement = document.createElement(`${headerType}`);
    headerElement.id = `${headerId}`;
    headerElement.className = `${headerClass}`;
    headerElement.innerHTML = `${headerText}`;
    headerId = (typeof headerId !== 'undefined') ?  headerId : 1
    return headerElement;
  }
  
  const getImage = (imgClass, imgId, imgAltText) => {
    const imageBlock = document.createElement('img');
    imageBlock.id = `${imgId}`;
    imageBlock.className = `${imgClass}`;
    imageBlock.alt = `${imgAltText}`;
  
    return imageBlock;
  }
  
  const getParagraph = (paragraphClassName, paragraphText) => {
    const paragraphBlock = document.createElement('p');
    paragraphBlock.className = `${paragraphClassName}`;
    paragraphBlock.innerHTML = `${paragraphText}`;
    return paragraphBlock;
  }

  const getWrapper = (wrapperType, wrapperClass, wrapperId) => {
    const blockWrapper = document.createElement(`${wrapperType}`);
    blockWrapper.className = `${wrapperClass}`;
    blockWrapper.id = `${wrapperId}`
    return blockWrapper;
  }

  return {
    getHeading,
    getImage,
    getParagraph,
    getWrapper
  }
})();

export default UIComponents;