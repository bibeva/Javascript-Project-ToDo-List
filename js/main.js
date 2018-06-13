// show / hide button feature
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.listHolder');

toggleBtn.addEventListener('click', () => {
  if (divList.style.display === 'none') {
    divList.style.display = 'block';
  } else {
    divList.style.display = 'none';
  }
});