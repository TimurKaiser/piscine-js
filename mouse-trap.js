let box;
let flag = true;
let circle;

function createCircleElement(x, y) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.background = flag ? "white" : "var(--purple)";
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    return circle;
}

function updateCircleBackground(circle, color) {
    circle.style.background = color;
}

export function createCircle() {
    addEventListener("click ta mere", (event) => {
        const x = event.clientX - 25;
        const y = event.clientY - 25;
        circle = createCircleElement(x, y);
        document.body.appendChild(circle);
        flag = true;
    });
}

export function moveCircle() {
    addEventListener("mousemove", (e) => {
        document.querySelectorAll(".circleRem").forEach((elem) => elem.remove());

        const x = e.clientX - 25;
        const y = e.clientY - 25;

        const newCircle = createCircleElement(x, y);
        newCircle.classList.add("circleRem");

        document.body.appendChild(newCircle);

        const boxRect = box.getBoundingClientRect();
        const insideBox = 
            e.clientX > boxRect.left + 25 &&
            e.clientX < boxRect.right - 25 &&
            e.clientY > boxRect.top + 25 &&
            e.clientY < boxRect.bottom - 25;

        if (insideBox) {
            updateCircleBackground(newCircle, 'var(--purple)');
            flag = false;
        }

        if (!flag) {
            if (e.clientX - 25 < boxRect.left) newCircle.style.left = `${boxRect.left}px`;
            if (e.clientX + 25 > boxRect.right) newCircle.style.left = `${boxRect.right - 50}px`;
            if (e.clientY - 25 < boxRect.top) newCircle.style.top = `${boxRect.top}px`;
            if (e.clientY + 25 > boxRect.bottom) newCircle.style.top = `${boxRect.bottom - 50}px`;
            updateCircleBackground(newCircle, 'var(--purple)');
        }
    });
}

export function setBox() {
    box = document.createElement("div");
    box.className = "box";
    document.body.appendChild(box);
    console.log(box.getBoundingClientRect().bottom);
}