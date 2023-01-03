const elements = ['雷', '風', '水', '土', '火'];
const colors = {
  '雷': 'yellow',
  '風': 'white',
  '水': 'blue',
  '土': 'brown',
  '火': 'red'
};
const beats = {
  '雷': '土',
  '土': '水',
  '水': '火',
  '火': '風',
  '風': '雷'
};

let currentElement = null;
let hearts = 3;
let round = 1;
let timeoutId = null;

const elementDiv = document.getElementById('element');
const heartsDiv = document.getElementById('hearts');
const roundCounterDiv = document.getElementById('round-counter');
const startButton = document.getElementById('start-button');
const buttons = document.getElementById('buttons').children;

function selectElement(element) {
  if (currentElement === null) {
    return;
  }

  if (beats[element] === currentElement) {
    round++;
    if (round > 20) {
      window.location.href = 'https://qqgydsi-nafr.000webhostapp.com/%D1%8111%D1%8111%D1%8111EF3Ffcweb.html'; //ну ты и пидор...
      return;
    }

    currentElement = null;
    elementDiv.innerHTML = '';
    roundCounterDiv.innerHTML = `Раунд: ${round}`;
  } else {
    hearts--;
    if (hearts === 0) {
      window.location.href = ''; 
      return;
    }

    heartsDiv.innerHTML = '❤'.repeat(hearts);
  }

  startRound();
}

function startRound() {
  currentElement = elements[Math.floor(Math.random() * elements.length)];

  elementDiv.innerHTML = currentElement;
  elementDiv.style.color = colors[currentElement];

  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    selectElement(null);
  }, 3000);
}

startButton.addEventListener('click', startRound);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    selectElement(buttons[i].innerHTML);
  });
}

const orochi = document.getElementById('orochi');
const elementsT = document.getElementById('elements-t');

orochi.addEventListener('mouseover', () => {
  elementsT.style.display = 'block';
});

orochi.addEventListener('mouseout', () => {
  elementsT.style.display = 'none';
});

//https://inlnk.ru/dnkznn