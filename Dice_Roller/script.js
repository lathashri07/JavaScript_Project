

rollButton.onclick = function() {
    const rollButton = document.getElementById("rollButton");
    const diceResults = document.getElementById("diceResults");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    const diceCount = document.getElementById("diceCount").value;
    for (let i = 0; i < diceCount; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }
    diceResults.textContent = `You rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
    
}