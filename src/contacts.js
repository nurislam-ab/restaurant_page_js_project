import UIComponents from './components';

const Contacts = (() => {
  const p1 = 'Send us a message and we’ll get back to you as soon as possible. You can also reach us by phone at (99) 123-4567. Looking forward to hearing from you.';

  const getContactForm = () => {
    const form = UIComponents.getWrapper('form', 'contact-form');
    const name = UIComponents.getInputField('text', 'name', 'cf-field', 'Name');
    const email = UIComponents.getInputField('email', 'email', 'cf-field', 'Email');
    const phone = UIComponents.getInputField('tel', 'phone-number', 'cf-field', 'Phone Number');
    const message = UIComponents.getTextarea('message', 'cf-field', 'Your Message');
    const sendBtn = UIComponents.getLink('#content', 'send', 'link-btn');
    form.append(name);
    form.append(email);
    form.append(phone);
    form.append(message);
    form.append(sendBtn);

    return form;
  };

  const getContactContent = () => {
    const mainContent = document.getElementById('content');
    const content = UIComponents.getWrapper('section', 'content', 'contact');
    const row = UIComponents.getWrapper('div', 'row');
    const textWrapper = UIComponents.getWrapper('div', 'text-block');
    const heading = UIComponents.getHeading('h2', 'contact us', 'title');
    const p = UIComponents.getParagraph('text', p1);

    content.classList.add('contact');

    textWrapper.append(heading);
    textWrapper.append(p);
    row.append(textWrapper);
    row.append(getContactForm());
    content.append(row);
    mainContent.append(content);

    return content;
  };

  return {
    getContactContent,
  };
})();

export default Contacts;