import { galleryItems } from './gallery-items.js';
// Change code below this line

const listRef = document.querySelector('.gallery');


function createGallery(items) {
    return items
    .map(
        (item) => 
        `
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
        `
    )
    .join('');
}
const markup = createGallery(galleryItems);
listRef.innerHTML = markup;

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });



// listRef.addEventListener('click', onImgClick);

// function onImgClick(e) {
//     e.preventDefault();
//     const el = e.target;
//     if(el.nodeName !== 'IMG'){
//         return;
//     }

//     const instance = basicLightbox.create(`
//     <img src = '${el.dataset.source}' width="800" height="600">
//     `)
//     instance.show();
//     console.log(instance);
//     listRef.addEventListener('keydown', (e)=>{
//         if(e.code === "Escape"){
//             console.log("Escape:")                
//             instance.close();
//         }
//     });
// }

