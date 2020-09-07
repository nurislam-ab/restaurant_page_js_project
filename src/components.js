const UIComponents = (() => {
  const getHeading = (headerType, headerText, headerClass, headerId) => {
    const headerElement = document.createElement(`${headerType}`);
    headerElement.id = `${headerId}`;
    headerElement.className = `${headerClass}`;
    headerElement.innerHTML = `${headerText}`;
    headerId = (typeof headerId !== 'undefined') ?  headerId : 1
    return headerElement;
  }

  return {
    getHeading,
  }
})();

export default UIComponents;