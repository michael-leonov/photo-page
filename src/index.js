import './styles/style.scss';
import httpRequest from './js/http-request';
import { photos, photoTemplate } from './js/templating';
import showPopUp from './js/pop-up';

document.addEventListener('DOMContentLoaded', () => {
    httpRequest({
        url: 'https://boiling-refuge-66454.herokuapp.com/images',
        onSuccess: (data) => {
            data.forEach((photo) => {
                photos.appendChild(photoTemplate(photo));
            });

            showPopUp();
        },
    });
});
