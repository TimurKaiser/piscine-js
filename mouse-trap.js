export function pick() {
    // Création d'un élément div pour afficher les valeurs HSL
    const hslDiv = document.createElement("div");
    hslDiv.className = "text hsl";
    document.body.appendChild(hslDiv);

    // Création d'un élément SVG pour les axes X et Y
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("height", window.innerHeight);
    svg.setAttribute("width", window.innerWidth);
    document.body.appendChild(svg);

    // Création des lignes pour les axes X et Y
    const axisX = createLine();
    const axisY = createLine();
    svg.appendChild(axisX);
    svg.appendChild(axisY);

    // Fonction pour créer une ligne SVG
    function createLine() {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.style.stroke = "white";
        line.style.strokeWidth = 1;
        return line;
    }

    // Ajout d'écouteurs d'événements pour suivre le mouvement de la souris et la position du clic
    document.addEventListener("mousemove", updateColorAndAxes);
    document.addEventListener("click", copyHSLValue);

    // Fonction pour mettre à jour la couleur de fond et les axes en fonction de la position de la souris
    function updateColorAndAxes(event) {
        // Calcul des valeurs HSL en fonction de la position de la souris
        const x = event.clientX / window.innerWidth * 360;
        const y = event.clientY / window.innerHeight * 100;
        const backgroundColor = `hsl(${x}, 50%, ${y}%)`;

        // Mise à jour du fond de la page
        document.body.style.background = backgroundColor;

        // Mise à jour des positions des lignes des axes X et Y
        axisX.setAttribute("x1", 0);
        axisX.setAttribute("y1", event.clientY);
        axisX.setAttribute("x2", window.innerWidth);
        axisX.setAttribute("y2", event.clientY);

        axisY.setAttribute("x1", event.clientX);
        axisY.setAttribute("y1", 0);
        axisY.setAttribute("x2", event.clientX);
        axisY.setAttribute("y2", window.innerHeight);

        // Mise à jour de l'affichage des valeurs HSL
        hslDiv.innerHTML = `hsl(${Math.round(x)}, 50%, ${Math.round(y)}%)`;
    }

    // Fonction pour copier la valeur HSL actuelle lors d'un clic
    function copyHSLValue() {
        const hslValue = hslDiv.innerHTML;
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.value = hslValue;
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
    }
}
