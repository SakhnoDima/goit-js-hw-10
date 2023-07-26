
export function renderOptions(arr, rootSelector ) {
    const markup = arr.map(el => `<option value=${el.id}>${el.name}</option>`).join("");
    rootSelector.innerHTML = markup
}

 export function renderCatCard(arr, rootSelector ) {
    const markup = ( `<div class="cat-info-box">
        <img width="654" src="${arr[0].url}" alt="${arr[0].breeds[0].alt_names}">
        <div class="text-content-box">
          <p>${arr[0].breeds[0].name}</p>
          <p>${arr[0].breeds[0].description}</p>
          <p>${arr[0].breeds[0].temperament}</p>
        </div>
      </div>`)
        
  rootSelector.innerHTML = markup
}
