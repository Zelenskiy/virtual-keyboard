import * as storage from './utils/storage.js';
import create from './utils/create.js';
import language from './layouts/index.js';
import Key from './Key.js';

let btn;
let btnIsHide = false;

const main = create('main', '',
  [create('h1', 'title', 'RSS virtual keyboard'),
    create('h3', 'subtitle', ''),
    create('p', 'hint', 'Use left <kbd>Ctrl</kbd> + <kbd>Alt</kbd> to switch language'),
    create('div', 'div_btn_collapse',
      btn = create('button', 'btn_collapse', 'Hide/Show')
    )
  ]);

// eslint-disable-next-line no-unused-vars
const lang = 'en';

btn.addEventListener('click', hideShowKeyboard);
function hideShowKeyboard () {
  btnIsHide = !btnIsHide;
  const keyBrd = document.querySelector('.keyboard');
  if (btnIsHide) {
    keyBrd.style.opacity = 0;
  } else {
    keyBrd.style.opacity = 1;
  }
}
