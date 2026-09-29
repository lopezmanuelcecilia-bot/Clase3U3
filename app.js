const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');
const dataContainer = document.getElementById('data-container');

function renderCharacters(characters) {
  dataContainer.innerHTML = '';
  characters.forEach(character => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${character.name}</h3><img src="${character.image}" alt="${character.name}">`;
    dataContainer.appendChild(div);
  });
}
