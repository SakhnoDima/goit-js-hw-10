import { refs } from "./refs";

//! функция скрывает загрущик
export function displayNone (){
refs.loader.style.display = "none";
   }
//? функция показывает загрущик
export function displayShow (){
    refs.loader.style.display = "block";
    }


//! функция скрывает селект
export function displayNoneSelect (){
    refs.select.style.display = "none";
    }
//? функция показывает селект
export function displayShowSelect (){
    refs.select.style.display = "block";
    }


//! функция скрывает error
export function displayNoneError (){
    refs.error.style.display = "none";
    }
//? функция показывает error
export function displayShowError (){
    refs.error.style.display = "block";
    }