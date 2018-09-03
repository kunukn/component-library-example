setTimeout(() => {
  let link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.type = 'text/css';
  link.href = '/fonts/font.css';
  document
    .head
    .appendChild(link);
}, 0);
