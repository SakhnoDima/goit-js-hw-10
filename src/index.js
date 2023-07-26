import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import { refs } from "./refs";

refs.select.addEventListener('change', onSelectChange )
// получаем и рендерим селект
fetchBreeds() 

 // обрабатываем клик, рендерим информацию 
function onSelectChange(event) {
    breedId = event.target.value;
    fetchCatByBreed(breedId);
}
