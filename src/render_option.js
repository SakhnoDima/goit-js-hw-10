
export function renderOptions(arr, rootSelector ) {
    const markup = arr.map(el => `<option value=${el.id}>${el.name}</option>`).join("");
    rootSelector.innerHTML = markup
}

 export function renderCatCard(arr, rootSelector ) {
    const markup = ( `<div>
        <img width="654" src="${arr[0].url}" alt="${arr[0].breeds[0].alt_names}">
        <p>${arr[0].breeds[0].name}</p>
        <p>${arr[0].breeds[0].description}</p>
        <p>${arr[0].breeds[0].temperament}</p>
      </div>`)
        
  rootSelector.innerHTML = markup
}
