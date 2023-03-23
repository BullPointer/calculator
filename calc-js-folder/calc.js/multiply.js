
function multi() {
    const screen = document.querySelector('.num');
    const multi = document.querySelector('.multi');
    multi.addEventListener('click', (equ) => {
        try {
            let value = screen.textContent;
            if(value[value.length-2].endsWith("/")) {
                let contentArr = [...value];
                contentArr.splice(-2, 1);
                screen.textContent = contentArr.join("");
            }
        } catch (error) {}
    })
}