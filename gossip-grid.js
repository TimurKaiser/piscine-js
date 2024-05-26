import { gossips } from "./gossip-grid.data.js";

function grid() {
    renderRanges();
    renderGossipForm();
    renderGossips();
}

function renderGossipForm() {
    const form = document.createElement("form");
    form.classList.add("gossip-form");

    const textarea = document.createElement("textarea");
    const button = document.createElement("button");
    button.innerHTML = "Share gossip!";
    button.type = "submit";
    button.addEventListener("click", handleGossipSubmission);

    form.appendChild(textarea);
    form.appendChild(button);
    document.body.appendChild(form);
}

function handleGossipSubmission(event) {
    event.preventDefault();
    const gossip = event.target.form.querySelector("textarea").value;
    if (gossip.length > 0) {
        gossips.unshift(gossip);
        removeAllGossipsExceptFirst();
        event.target.form.querySelector("textarea").value = "";
        renderGossips();
    }
}

function removeAllGossipsExceptFirst() {
    document.querySelectorAll(".gossip:not(:first-child)").forEach(card => card.remove());
}

function renderGossips() {
    const gossipContainer = document.createElement("div");
    gossipContainer.classList.add("gossip-container");

    gossips.forEach(gossip => {
        const div = document.createElement("div");
        div.classList.add("gossip");
        div.innerHTML = gossip;
        gossipContainer.appendChild(div);
    });

    document.body.appendChild(gossipContainer);
}

function renderRanges() {
    const rangesContainer = document.createElement("div");
    rangesContainer.classList.add("ranges-container");

    const widthRange = createRangeInput("width", 200, 800, 400, handleWidthChange);
    const fontSizeRange = createRangeInput("fontSize", 20, 40, 30, handleFontSizeChange);
    const backgroundColorRange = createRangeInput("background", 20, 75, 50, handleBackgroundColorChange);

    rangesContainer.appendChild(widthRange);
    rangesContainer.appendChild(fontSizeRange);
    rangesContainer.appendChild(backgroundColorRange);

    document.body.appendChild(rangesContainer);
}

function createRangeInput(id, min, max, value, changeHandler) {
    const rangeInput = document.createElement("input");
    rangeInput.type = "range";
    rangeInput.id = id;
    rangeInput.min = min;
    rangeInput.max = max;
    rangeInput.value = value;
    rangeInput.addEventListener("input", changeHandler);
    return rangeInput;
}

function handleWidthChange(event) {
    const cards = document.querySelectorAll(".gossip");
    cards.forEach(card => {
        card.style.width = event.target.value + "px";
    });
}

function handleFontSizeChange(event) {
    const cards = document.querySelectorAll(".gossip");
    cards.forEach(card => {
        card.style.fontSize = event.target.value + "px";
    });
}

function handleBackgroundColorChange(event) {
    const cards = document.querySelectorAll(".gossip");
    cards.forEach(card => {
        card.style.backgroundColor = `hsl(280, 50%, ${event.target.value}%)`;
    });
}

export { grid };
