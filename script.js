const boxes = document.querySelectorAll('.box');

// Cannot use arrow functions for Event Listener function
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 3;

    boxes.forEach(box => {
        // Returns DOMRect providing information about where in the viewport it is located
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }

    })
}