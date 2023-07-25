import {renderOptions, renderCatCard} from "./render_option";
import { refs } from "./refs";

const KEY = "live_QwxIJNU3VtCwzTnsw0wWFLJgnT53KZYtpKzx4Fdm53ZhxhA8kBUxgYGJjrm68GKS"

// fetch(`https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${KEY}`)

export function fetchBreeds(){
    fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => { 
        return response.json();
    })
    .then(breeds => renderOptions(breeds,refs.select))
}

export function fetchCatByBreed(breedId){
    fetch(`https://api.thecatapi.com/v1/images/search?&breed_ids=${breedId}&api_key=${KEY}`)
.then(response => { 
    return response.json();
})
.then(catCard => { console.log(catCard);
    renderCatCard(catCard, refs.catInfo)
})
}