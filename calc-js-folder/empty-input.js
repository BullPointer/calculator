

function empty_input() {
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        const screen = document.querySelector('.num');
        screen.textContent = "";
    });
}

function del_input() {
    const del = document.querySelector('.del');
    del.addEventListener('click', () => {
        const screen = document.querySelector('.num');
        const output = screen.textContent.split("");
        output.pop();
        let output2 = output.join("");
        screen.textContent = output2;
    });
}