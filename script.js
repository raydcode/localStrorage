const inputElement = document.querySelector('.input-text');
const btn = document.querySelector('.btn');
const result = document.getElementById('list');

let dataArray = [];

let listTemplate = '';

const getDataFromStorage = () => {
  const users = JSON.parse(localStorage.getItem('user'));
 
  users.forEach((user) => {
    listTemplate += `<li>${user}</li>`;
  });

  result.innerHTML = listTemplate;
  listTemplate = '';
};

btn.addEventListener('click', () => {
  if (inputElement.value.length > 0) {
    dataArray.push(inputElement.value);

    console.log(dataArray);
 
    const dataString = JSON.stringify(dataArray);

    localStorage.setItem('user', dataString);
    getDataFromStorage();
    inputElement.value = ''
  } else {
    alert('please enter a data');
  }
});

getDataFromStorage();
