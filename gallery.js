const buttons = document.querySelectorAll("button");
const imgs = document.querySelector("img");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let buttonList = {
            猫: "cat",
            犬: "dog",
            パンダ: "panda",
        };
        
        const Buttontext = button.textContent;
        const showPricture = buttonList[Buttontext];
        imgs.src = `/assets/images/${showPricture}.jpg`;
        console.log(showPricture);
    });
});