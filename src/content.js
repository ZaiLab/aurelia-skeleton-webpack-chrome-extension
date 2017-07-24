console.log('Content > chrome.runtime = ', chrome.runtime);
console.log('Content > document.body = ', document.body);

function createWidget() {

  var iFrame = document.createElement('iframe');
  iFrame.style.borderWidth = 0;
  iFrame.style.height = '100px';
  iFrame.style.width = '100px';
  iFrame.src = chrome.extension.getURL('widget.html');

  var wrapper = document.createElement('div');
  wrapper.style.border = '1px solid lightgrey';
  wrapper.style.borderRadius = '4px';
  wrapper.style.position = 'fixed';
  wrapper.style.top = '7px';
  wrapper.style.left = '7px';
  wrapper.style.height = '100px';
  wrapper.style.width = '100px';
  wrapper.style['z-index'] = '2147483646';
  wrapper.style.cursor = 'move';
  wrapper.style.display = 'block';
  wrapper.appendChild(iFrame);
  wrapper.setAttribute('id', '___widget___');

  return wrapper;
}

function appendWidget() {

  let container = document.body;

  if (container.firstChild.outerHTML !== widget.outerHTML) {

    container.insertBefore(widget, container.firstChild);
  }

  setTimeout(() => {

    appendWidget();
  }, 500);
}

const widget = createWidget();
appendWidget();