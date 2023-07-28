import { refs } from "./refs";

//! функция скрывает загрущик
export function displayNoneLoader (){
refs.loader.classList.add("visually-hidden");
   }
//? функция показывает загрущик
export function displayShowLoader (){
    refs.loader.classList.remove("visually-hidden");
    }

//! функция скрывает селект
export function displayNoneSelect (){
    refs.select.classList.add("visually-hidden");
    }
//? функция показывает селект
export function displayShowSelect (){
    refs.select.classList.remove("visually-hidden");
    }


