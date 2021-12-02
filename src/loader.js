const loader = document.querySelector('.loader');

export const showLoader = () => loader.classList.remove('hide');
export const hideLoader = () => loader.classList.add('hide');