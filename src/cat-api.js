import {renderOptions, renderCatCard} from "./render_option";
import { refs } from "./refs";
import {
    displayShow, 
    displayNone, 
    displayNoneSelect,
    displayShowSelect,
    displayShowError,
    displayNoneError } from "./helpers";


const KEY = "live_QwxIJNU3VtCwzTnsw0wWFLJgnT53KZYtpKzx4Fdm53ZhxhA8kBUxgYGJjrm68GKS"

// ? запрос на получение имен для селекта
export function fetchBreeds(){

    displayNoneSelect(),
    displayShow()
    displayNoneError()

    setTimeout(() => {

    fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => { 
        return response.json();
    })
    .then(breeds => renderOptions(breeds,refs.select))
    .catch(error => {
          console.log(error);
          displayShowError()
          displayNoneSelect()   
        })

        displayShowSelect()
        displayNone()

    }, 2000); 
}

// ? рендер информации после запроса
export function fetchCatByBreed(breedId){
    displayShow()
    displayNoneError()
    refs.catInfo.innerHTML = "";

    setTimeout(() => {

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
      displayNone()

    }, 2000);
   
}