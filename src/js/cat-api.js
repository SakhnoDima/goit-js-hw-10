import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ 
      width: '300px',
      timeout: 3000,
      position: 'center-center'
    });

const KEY = "live_QwxIJNU3VtCwzTnsw0wWFLJgnT53KZYtpKzx4Fdm53ZhxhA8kBUxgYGJjrm68GKS"
const BASE_URL = "https://api.thecatapi.com/v1";


// ? запрос на получение имен для селекта
export function fetchBreeds(){
   return fetch(`${BASE_URL}/breeds`)
    .then(response => {
      if (!response.ok){ 
      throw new Error (Notify.failure('Oops! Something went wrong! Try reloading the page!')
      )}
      return response.json() })
}

// ? рендер информации после запроса
export function fetchCatByBreed(breedId){
return fetch(`${BASE_URL}/images/search?&breed_ids=${breedId}&api_key=${KEY}`)
    .then(response => {
      if (!response.ok){ 
        throw new Error (Notify.failure('Oops! Something went wrong! Try reloading the page!')
        )}
        return response.json()})
}

 