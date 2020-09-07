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

  return {
    getHeading,
    getImage,
  }
})();

export default UIComponents;