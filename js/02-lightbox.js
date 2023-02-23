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

