
//1. where to add

const placeslist = document.getElementById('places-list');
const mainContainer = document.getElementById('main-container');


//2. what to be added

const li = document.createElement('li');
li.innerText = 'Kangasala';

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

//3. add the child

placeslist.appendChild(li);
mainContainer.appendChild(section);



