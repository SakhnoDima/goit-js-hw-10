import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ 
      width: '300px',
      timeout: 3000,
      position: 'center-center',});
import SlimSelect from 'slim-select';//! не разобраля
import axios, { AxiosHeaders } from 'axios';

import {renderOptions, renderCatCard} from "./render_option";
import { refs } from "./refs";
import {
    displayShow, 
    displayNone, 
    displayNoneSelect,
    displayShowSelect,
  } from "./helpers";



const KEY = "live_QwxIJNU3VtCwzTnsw0wWFLJgnT53KZYtpKzx4Fdm53ZhxhA8kBUxgYGJjrm68GKS"
const URL = "https://api.thecatapi.com/v1/breeds";


// ? запрос на получение имен для селекта
export function fetchBreeds(){

    displayNoneSelect(),
    displayShow()
  
    setTimeout(() => {
   
    // fetch("https://api.thecatapi.com/v1/breeds")
    axios.get(URL)
    .then(breeds =>{
      renderOptions(breeds,refs.select)})
    .catch(error => {
          Notify.failure('Oops! Something went wrong! Try reloading the page!');
          console.log(error);
        
          displayNoneSelect()   
        })
    .finally(() => {

    displayShowSelect()
    displayNone()
    })
   
    }, 2000); 
}

// ? рендер информации после запроса
export function fetchCatByBreed(breedId){
    displayShow()
   
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
        Notify.failure('Oops! Something went wrong! Try reloading the page!');
        console.log(error);
       
      }) 
    .finally(() => {

      displayNone()
    }) 
    }, 2000);
   
}