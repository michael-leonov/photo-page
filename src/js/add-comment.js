const formBtn = document.querySelector('.comment-form__btn');

export default function addComment() {
    formBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const popUpImg = document.querySelector('.popup__img');
        const formInput = document.querySelector('.comment-form__input');

        fetch(window.baseURL + `/${popUpImg.dataset.id}/comments`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'test',
                comment: formInput.value,
            }),
        })
            .then((response) => {
                console.log('response', response);

                if (response.status === 204) {
                    return new Promise((resolve) => resolve(null));
                }
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(() => {
                console.log('success');
            });
    });
}
