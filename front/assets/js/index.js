const guitaresContent = document.querySelector(".guitares-content");
const popularContent = document.querySelector(".popular-content");

(async function getGuitares() {
  try {
    const response = await getData("guitars.json");
    if (Array.isArray(response) && response.length > 0) {
      for (const element of response) {
        const randomRating = Math.floor(Math.random() * (5 - 1) + 1);
        guitaresContent.innerHTML += `
        <article class="guitare-article">
          <img src="../back/images/${element.imageUrl}" alt="${
          element.altTxt
        }"/>
          <h3>${element.name}</h3>
          <p>${element.price}€ ou <span class="bold">${
          element.monthly
        }€ / mois</span></p>
          <div class="guitare-rating">
          ${renderRating(randomRating)}
          </div>
        </article>`;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
})();

(async function getPopular() {
  try {
    const response = await getData("populars.json");
    if (Array.isArray(response) && response.length > 0) {
      for (const element of response) {
        const randomRating = Math.floor(Math.random() * (5 - 1) + 1);
        popularContent.innerHTML += `
        <article class="popular-article">
          <img src="../back/images/${element.imageUrl}" alt="${
          element.altTxt
        }"/>
          <div class="popular-article-content">
            <h3>${element.name}</h3>
            <p>${element.price}€ ou <span class="bold">${
          element.monthly
        }€ / mois</span></p>
            <div class="popular-article-rating">
              ${renderRating(randomRating)}
            </div>  
          </div>
        </article>`;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
})();

(async function getStudio() {
  try {
    const response = await getData("studio.json");
    if (Array.isArray(response) && response.length > 0) {
      for (let i = 0; i < response.length; i++) {
        document.querySelector(`#studio-${i}`).innerHTML = `
          <img src="../back/images/${response[i].imageUrl}" class="stretch" />
          <h3 class="text_studio">${response[i].title}</h3>
          `;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
})();

/**
 *
 * @param {string} url
 * @returns [Object]
 */
async function getData(url) {
  const request = await fetch(`../back/${url}`);
  const response = await request.json();
  return response;
}

/**
 * @param {number} number
 * @returns string
 */
function renderRating(number) {
  let ratings = "";
  const restRating = 5 - number;
  for (let i = 0; i < number; i++) {
    ratings += `<i class="fas fa-star primary-color"></i>`;
  }
  for (let i = 0; i < restRating; i++) {
    ratings += `<i class="fas fa-star border-color"></i>`;
  }
  return ratings;
}
