import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import { refs } from "./refs";

// .then(response => {
// return response.json();
// })
// .then(pokemon => { 
//     let breeds = new Set();
//     pokemon.forEach(element => breeds.add(element.breeds[0].name))
//     console.log(breeds);
//     // const markup = pocemonsCard(pokemon)
//     // console.log(markup);
// })
// .catch(error => {
//   console.log(error);
// }) 
fetchBreeds()
refs.select.addEventListener('change', onSelectChange )
function onSelectChange(event) {
    breedId = event.target.value;
    fetchCatByBreed(breedId);
}
