import { styles } from "./pimp-my-style.data.js"

var compteur = 0;

function pimp() {
    var button = document.querySelector("button.button");
    if (!button.classList.contains("unpimp")) {
        button.classList.add(styles[compteur]);
        compteur++;
    } else {
        compteur--;
        button.classList.remove(styles[compteur]);
        if (compteur === 0) {
            button.classList.toggle("unpimp");
        }
    }

    // compte si capteur est aller jusqua kla fin du tableau de styke
    if (compteur === styles.length) {
        button.classList.toggle("unpimp");
    }
}

export {
    pimp,
}

