/* 
1. show / hide button 
---------------------
*/
// create variables
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.listHolder');

// action to be taken when clicked on hide list button
toggleBtn.addEventListener('click', () => {
  if (divList.style.display === 'none') {
    divList.style.display = 'block';
    toggleBtn.innerHTML = 'Hide List';
  } else {
    divList.style.display = 'none';
    toggleBtn.innerHTML = 'Show List';
  }
});

/* 
2. add list items
-----------------
*/
// create variables
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');

function addLists() {
  if (addInput.value === '') {
    alert('Enter the list name please!!!');
  } else {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
    createBtn(li);
  }
}

// add list when clicked on add item button
addBtn.addEventListener('click', () => {
  addLists();
});

// add list when pressed enter
addInput.addEventListener('keyup', (event) => {
  if(event.which === 13) {
    addLists();
  }
});

/* 
3. create action buttons
------------------------
*/
// create variables
const listUl = document.querySelector('.list');
const lis = listUl.children;

function createBtn(li) {
  // create remove button
  const remove = document.createElement('button');
  remove.className = 'btn-icon remove';
  li.appendChild(remove);

  // create down button
  const down = document.createElement('button');
  down.className = 'btn-icon down';
  li.appendChild(down);

  // create up button
  const up = document.createElement('button');
  up.className = 'btn-icon up';
  li.appendChild(up);

  return li;
}

// loop to add buttons in each li
for (var i = 0; i < lis.length; i++) {
  createBtn(lis[i]);
}


/* 
4. enabling button actions (to move item up, down or delete)
------------------------------------------------------------
*/
divList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.className === 'btn-icon remove') {
      ul.removeChild(li);
    } else if (button.className === 'btn-icon down') {
      const nextLi = li.nextElementSibling;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    } else if (button.className === 'btn-icon up') {
      const prevLi = li.previousElementSibling;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
  }
});