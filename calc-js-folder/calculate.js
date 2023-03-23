
function calc() {
    const screen = document.querySelector('.num');
    const equal = document.querySelector('#equal');
    equal.addEventListener('click', (equ) => {
        let value = screen.textContent;
        try {
            let calc = value.replace("x", "*")
            screen.textContent = new Function('return ' + calc)();
        } catch (error) {
            screen.textContent = "";
        }
    })
    multi();
    divide();
}
