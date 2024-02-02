window.addEventListener("DOMContentLoaded", init);

const beerURL = "https://api.punkapi.com/v2/beers";

/* variabler */
let beerTemplate;
let beerContainer;

/* json kaldes og laves om. response er mellemtrin, som laves om til json. return response = retunerer json*/

/* alt inde i fetch er forsinket, og udenfor er klar. Derfor hedder det asynkron */

/* der står beerJSON på linje 20 og ikke på linje 16, fordi det "bare" er et parameter man giver funktionen. Derfor kan det hede hvad som helst */

/* På linje 16 kalder vi funktionen */

function init() {
  beerTemplate = document.querySelector(".beer_template");
  console.log("beerTemplate", beerTemplate);

  beerContainer = document.querySelector(".beer_container");
  console.log("beerContainer", beerContainer);

  fetch(beerURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log("json", json);
      showBeers(json);
    });
}

function showBeers(beerJSON) {
  let beerClone;

  beerJSON.forEach((beer) => {
    console.log("Beer", beer);
    beerClone = beerTemplate.cloneNode(true).content;
    beerClone.querySelector(".beer_image").src = beer.image_url;
    beerClone.querySelector(".beer_image").alt = `Picture of a ${beer.name} beer`;
    beerClone.querySelector(".beer_name").textContent = beer.name;
    beerClone.querySelector(".beer_tagline").textContent = beer.tagline;
    beerClone.querySelector(".beer_description").textContent = beer.description;
    beerContainer.appendChild(beerClone);
  });
}
