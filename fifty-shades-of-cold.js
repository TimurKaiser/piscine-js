import { colors } from "./fifty-shades-of-cold.data.js";

function generateClasses() {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");

    colors.forEach((color) => {
        style.innerHTML += `.${color} {\n  background: ${color};\n }\n\n`;
    });

    head.appendChild(style);
}

function generateColdShades() {
    const container = document.body;

    const coldColors = colors.filter(color =>
        color.includes('blue') ||
        color.includes('turquoise') ||
        color.includes('green') ||
        color.includes('cyan') ||
        color.includes('navy') ||
        color.includes('purple')
    );

    coldColors.forEach(color => {
        const div = document.createElement('div');
        div.className = color;
        div.textContent = color;
        container.appendChild(div);
    });
}

function choseShade(shade) {
    const divs = document.querySelectorAll('div');

    divs.forEach(div => {
        div.className = shade;
    });
}

export {
    generateClasses,
    generateColdShades,
    choseShade,
}
