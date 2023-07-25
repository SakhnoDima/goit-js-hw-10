import {renderOptions, renderCatCard} from "./render_option";
import { refs } from "./refs";
import {displayShow, displayNoneSelect, displayShowError } from "./helpers";

const KEY = "live_QwxIJNU3VtCwzTnsw0wWFLJgnT53KZYtpKzx4Fdm53ZhxhA8kBUxgYGJjrm68GKS"

// fetch(`https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${KEY}`)

// ? запрос на получение имен для селекта

export function fetchBreeds(){
    displayShow()
   
    fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => { 
        return response.json();
    })
    .then(breeds => renderOptions(breeds,refs.select))
    .catch(error => {
          console.log(error);
          displayShowError()   
        }) 
}

export function fetchCatByBreed(breedId){
    displayShow()
    fetch(`https://api.thecatapi.com/v1/images/search?&breed_ids=${breedId}&api_key=${KEY}`)
.then(response => { 
    return response.json();
})
.then(catCard => { console.log(catCard);
    renderCatCard(catCard, refs.catInfo)
})
.catch(error => {
    console.log(error);
    displayShowError()   
  }) 
}