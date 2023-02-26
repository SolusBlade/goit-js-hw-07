import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const listRef = document.querySelector('.gallery');


function createGallery(items) {
    return items
    .map(
        (item) => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                />
            </a>
        </div>`
    )
    .join('');
}
const markup = createGallery(galleryItems);
listRef.innerHTML = markup;

listRef.addEventListener('click', onImgClick);

function onImgClick(e) {
    e.preventDefault();
    const el = e.target;
    if(el.nodeName !== 'IMG'){
        return;
    }

    const instance = basicLightbox.create(`
    <img src = '${el.dataset.source}' width="800" height="600">
    `)
    instance.show();
    function onCheck(e) {
        if(e.code === "Escape"){     
            console.log("onCheck  Escape:")  
            listRef.removeEventListener('keydown', onCheck); 
            instance.close();
        }
    }
    listRef.addEventListener('keydown', onCheck);
}


