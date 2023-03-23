

const getInput = () => {
    const inputs = document.querySelectorAll('.btn');
    const screen = document.querySelector('.num');

    const charArr = ["+", "-", "/", "x", ".", "%"];
    inputs.forEach(input => {
        input.addEventListener('click', (btn) => {
            screen.textContent += btn.target.textContent;
            let newScreen = screen.textContent;
            for (let index = 0; index <= charArr.length; index++) {
                if(screen.textContent.startsWith(charArr[index])) {
                    screen.textContent = "";
                }
                try {
                    if((newScreen[newScreen.length-1].endsWith(charArr[index])) && 
                    newScreen[newScreen.length-2].endsWith(charArr[index])) {
                        let contentArr = [...newScreen];
                        contentArr.splice(-2, 1);
                        screen.textContent = contentArr.join("");
                    }
                } catch (error) {}
            }
        })
    });
}