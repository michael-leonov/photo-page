export const photos = document.querySelector('.photos');

export function photoTemplate(photo) {
    const photoElement = document.createElement('div');
    photoElement.classList.add('photo');

    const photoImage = new Image();
    photoImage.src = photo.url;
    photoImage.dataset.id = photo.id;
    photoImage.classList.add('photo__img');

    photoElement.appendChild(photoImage);

    const photoId = document.createElement('p');

    photoId.textContent = 'id:' + ' ' + photo.id;
    photoId.classList.add('photo__id');

    photoElement.appendChild(photoId);

    return photoElement;
}
