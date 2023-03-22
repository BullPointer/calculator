

const getInput = () => {
    const inputs = document.querySelectorAll('.btn');
    const screen = document.querySelector('.num');

    const charArr = ["+", "-", "/", "x", ".", "%"];
    inputs.forEach(input => {
        input.addEventListener('click', (btn) => {
            screen.textContent += btn.target.textContent;
            for (let index = 0; index <= charArr.length; index++) {
                if(screen.textContent.startsWith(charArr[index])) {
                    screen.textContent = "";
                }
            }
        })
    });
}