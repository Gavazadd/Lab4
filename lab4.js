const ex1ById = document.getElementById('example1');
const ex1querySelector = document.querySelector('.example1');

function getRandomInt() {
    return Math.floor(Math.random() * 255);
}

function getRandomColorStyle() {
    return 'rgb(' + getRandomInt() + ',' + getRandomInt() + ',' + getRandomInt() + ')';
}

const changeColorsId = () => {
    ex1ById.style.background = getRandomColorStyle();
    ex1ById.style.color = getRandomColorStyle();
};

const changeColorsQs = () => {
    ex1querySelector.style.background = getRandomColorStyle();
    ex1querySelector.style.color = getRandomColorStyle();
};


const onClickAdd = () => {
    const imgAdd = document.createElement('img');
    imgAdd.id = 'picture';
    imgAdd.src = 'https://cdn.livesport.ru/l/tips/football/2020/03/31/when_will_football_come_back/picture.jpg?1585129940';
    imgAdd.style.width = '450px';
    imgAdd.style.height = '300px';
    bodyElem.appendChild(imgAdd);
};

const onClickIncrease = () => {
    const imgAdd = document.getElementById('picture');
    imgAdd.style.width = String(imgAdd.offsetWidth + 25) +'px';
    imgAdd.style.height = String(imgAdd.offsetHeight + 25) +'px';
};

const onClickReduce = () => {
    const imgAdd = document.getElementById('picture');
    imgAdd.style.width = String(imgAdd.offsetWidth - 25) +'px';
    imgAdd.style.height = String(imgAdd.offsetHeight - 25) + 'px';
};

const onClickRemove = () => {
    const imgAdd = document.getElementById('picture');
    imgAdd && bodyElem.removeChild(imgAdd);
};

const bodyElem = document.querySelector('body');
const divButtons = document.createElement('div');
const addButton = document.createElement('button');
addButton.innerHTML = 'Додати';
addButton.onclick = onClickAdd;
const increaseButton = document.createElement('button');
increaseButton.innerHTML = 'Збільшити';
increaseButton.onclick = onClickIncrease;
const reduceButton = document.createElement('button');
reduceButton.innerHTML = 'Зменшити';
reduceButton.onclick = onClickReduce;
const removeButton = document.createElement('button');
removeButton.innerHTML = 'Видалити';
removeButton.onclick = onClickRemove;
divButtons.appendChild(addButton);
divButtons.appendChild(increaseButton);
divButtons.appendChild(reduceButton);
divButtons.appendChild(removeButton);
divButtons.appendChild(removeButton);
bodyElem.appendChild(divButtons);