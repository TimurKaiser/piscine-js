export function pick() {
    const div1 = document.createElement("div");
    div1.className = "text hsl";
    document.body.appendChild(div1);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", window.innerHeight);
    svg.setAttribute("width", window.innerWidth);

    const linex = document.createElementNS("http://www.w3.org/2000/svg", "line");
    linex.setAttribute("id", "axisY");
    linex.style.stroke = "width";
    linex.style.strokeWidth = 1;

    const liney = document.createElementNS("http://www.w3.org/2000/svg", "line");
    liney.setAttribute("id", "axisX");
    liney.style.stroke = "white";
    liney.style.strokeWidth = 1;

    svg.appendChild(liney);
    svg.appendChild(linex);
    document.body.appendChild(svg);

    const removeElements = (selectors) => {
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => element.remove());
        });
    };

    addEventListener("mousemove", e => {
        removeElements([".hue", ".hsl", ".luminosity"]);

        const x = e.clientX / window.innerWidth * 360;
        const y = e.clientY / window.innerHeight * 100;

        document.body.style.background = `hsl(${x}, 50%, ${y}%)`;

        linex.setAttribute("x1", 0);
        linex.setAttribute("y1", e.clientY);
        linex.setAttribute("x2", window.innerWidth);
        linex.setAttribute("y2", e.clientY);

        liney.setAttribute("x1", e.clientX);
        liney.setAttribute("y1", 0);
        liney.setAttribute("x2", e.clientX);
        liney.setAttribute("y2", window.innerHeight);

        const hue = document.createElement("div");
        hue.className = "hue text";
        hue.innerHTML = `hue<br>${Math.round(x)}`;
        document.body.appendChild(hue);

        const hsl = document.createElement("div");
        hsl.className = "hsl text";
        hsl.innerHTML = `hsl(${Math.round(x)}, 50%, ${Math.round(y)}%)`;
        document.body.appendChild(hsl);

        const luminosity = document.createElement("div");
        luminosity.className = "luminosity text";
        luminosity.innerHTML = `${Math.round(y)}<br>luminosity`;
        document.body.appendChild(luminosity);
    });

    addEventListener("click", () => {
        const val = document.querySelector(".hsl").innerHTML;
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.value = val;
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
    });
}