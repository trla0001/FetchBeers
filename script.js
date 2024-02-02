window.addEventListener("DOMContentLoaded", init);

const beerURL = "https://api.punkapi.com/v2/beers";

/* json kaldes og laves om. response er mellemtrin, som laves om til json. return response = retunerer json*/

/* alt inde i fetch er forsinket, og udenfor er klar. Derfor hedder det asynkron */

function init() {
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
  console.log("Første json element", beerJSON[0]);
}
