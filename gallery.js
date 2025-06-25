const buttons = document.querySelectorAll("button");
const imgs = document.querySelector("img");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const Buttontext = button.textContent;

        imgs.src = `${Buttontext}.jpg`;
    });
});