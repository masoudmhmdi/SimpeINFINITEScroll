import { data } from 'autoprefixer';
import getProduct from './services/api/getProduct';
import './style.css';
const cardContainer = document.getElementById('cardContainer');
let localData = [];
let offset = 0;
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      getProduct(offset).then((res) => {
        renderCard(res.data);
        console.log(res.data);
        offset += 10;
        console.log(offset);
      });
    }
  },
  {
    threshold: 0.5,
  }
);

const renderCard = (dataArr) => {
  localData.push(...dataArr);
  cardContainer.innerHTML = '';
  localData.forEach((card, i) => {
    if (i === localData.length - 1) {
      let html = `<div id="observe" class="col-span-4 rounded-sm border-2">
    <img
      src="${card.category.image}"
      class="w-full object-cover h-48"
    />
    <div class="flex flex-col w-full">
      <h2 class="text-2xl">${card.title}</h2>
      <p >price:${card.price}$</p>
    </div>
    </div>`;
      cardContainer.innerHTML += html;
    } else {
      let html = `<div class="col-span-4 rounded-sm border-2">
    <img
      src="${card.category.image}"
      class="w-full object-cover h-48"
    />
    <div class="flex flex-col w-full">
      <h2 class="text-2xl">${card.title}</h2>
      <p class="">price:${card.price}$</p>
    </div>
    </div>`;
      cardContainer.innerHTML += html;
    }
  });

  observer.observe(document.getElementById('observe'));
};

getProduct().then((res) => renderCard(res.data));
