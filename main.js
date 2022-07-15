console.log('Hello World');
const container = document.querySelector('.container-cards');

const getData = async () => {
  const res = await axios.get(
    'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories'
  );

  console.log(res.data.communityCategories);
  return res.data.communityCategories;
};

const render = async () => {
  const data = await getData();

  data.forEach((item) => {
    container.innerHTML += `
    <div class="card">
      <div class="card-image">
        <img class="card-image--background" src="${
          item.background ||
          'https://storage.googleapis.com/bucket-larnu/media/business/153/images/BO64E73I.png'
        }" alt="${item.name}">
        <img class="card-image--icon"  src="${item.icon}" alt="${item.name}">
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-text">Total Quizzes: ${item.totalQuizzes}</p>
        <p class="card-text">User: ${item.users}</p>
        <a href="https://larnu.app/" target="_blank"  class="btn btn-primary">Go to Larnu</a>
      </div>
  </div>
  `;
  });
};

render();
