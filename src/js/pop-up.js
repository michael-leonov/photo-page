import httpRequest from './http-request';
import { photos } from './templating';

export default function showPopUp() {
    const photosImg = photos.querySelectorAll('.photo__img');

    photosImg.forEach((photoImg) => {
        photoImg.addEventListener('click', () => {
            activePopUp();

            httpRequest({
                url: `https://boiling-refuge-66454.herokuapp.com/images/${photoImg.dataset.id}`,
                onSuccess: (data) => {
                    generatePopUp(data);
                },
            });
        });
    });
}

function activePopUp() {
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.bg-overlay');
    popup.classList.add('active');
    overlay.classList.add('active');

    overlay.classList.contains('active')
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'visible');

    overlay.addEventListener('click', () => {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        resetPopUp();
    });
}

function generatePopUp(jsonData) {
    const popUpImg = document.querySelector('.popup__img');
    popUpImg.src = jsonData.url;

    jsonData.comments.forEach((comment) => {
        const commentText = document.createElement('li');
        commentText.innerHTML = comment.text;

        document
            .querySelector('.popup__comments-list')
            .appendChild(commentText);
    });
}

function resetPopUp() {
    const popUpImg = document.querySelector('.popup__img');
    popUpImg.src = '';

    document.querySelector('.popup__comments-list').innerHTML = '';
}
