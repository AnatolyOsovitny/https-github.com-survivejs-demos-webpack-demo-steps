import '!demo-loader?name=foo!./main.css';

export default (text = 'Hello world') => {
  const element = document.createElement('div');

  element.className = 'fa fa-hand-spock-o fa-1g';
  element.innerHTML = text;
  element.onclick = () => {
    import('./lazy').then((lazy) => {
      element.textContent = lazy.default;
    }).catch((err) => {
      console.error(err);
    });
  };

  return element;
};
