

function divide() {
    const screen = document.querySelector('.num');
    const div = document.querySelector('.divide');
    div.addEventListener('click', (equ) => {
        try {
            let value = screen.textContent;
            if(value[value.length-2].endsWith("x")) {
                let contentArr = [...value];
                contentArr.splice(-2, 1);
                screen.textContent = contentArr.join("");
            }
        } catch (error) {}

    })
}