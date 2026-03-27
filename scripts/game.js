function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectField = event.target;
  const selectedColumu = selectField.dataset.col - 1;
  const selectedRow = selectField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumu] > 0) {
    alert("Please select an empty field!");
    return;
  }

  selectField.textContent = players[activePlayer].symbol; //player[0]
  selectField.classList.add("disabled");

  gameData[selectedRow][selectedColumu] = activePlayer + 1;

  switchPlayer();
}
