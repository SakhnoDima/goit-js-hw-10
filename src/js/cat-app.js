import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ 
      width: '300px',
      timeout: 3000,
      position: 'center-center'});
import SlimSelect from 'slim-select'
import "slim-select/dist/slimselect.css";


import {renderOptions, renderCatCard} from "./render_option";      
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import { refs } from "./refs";
import { displayNoneLoader, displayShowLoader, displayNoneSelect, displayShowSelect } from "./helpers";

refs.select.addEventListener('change', onSelectChange )

// получаем и рендерим селект
fetchBreeds().then(breeds =>renderOptions(breeds, refs.select))
.finally(() => {
const select = new SlimSelect({
      select: refs.select,
    })
displayShowSelect()
displayNoneLoader()

})

 // обрабатываем клик, рендерим информацию 
function onSelectChange(event) {
   const breedId = event.target.value;
   displayShowLoader()
   fetchCatByBreed(breedId).then(catCard => renderCatCard(catCard, refs.catInfo))
   .finally(() => {
   displayNoneLoader()
   }) 
}

// {const breedOptions = breeds.map(breed => ({ value : breed.id, text: breed.name }))
//    select.setData(breedOptions)}