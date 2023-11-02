const boxes = document.querySelectorAll(".box")


const checkBoxes = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach( (box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    });
}

window.addEventListener("scroll", checkBoxes);
checkBoxes();

// boxes.forEach((box) => {
//     console.log(box.getBoundingClientRect());
// })

// EL FOR EACH DE ARRIBA ARROJA LAS COORDENADAS DE CADA CAJA,
// SU ANCHO, ALTO Y LA POSICION QUE TIENE (TOP; BOTTOM, LEFT Y RIGHT)