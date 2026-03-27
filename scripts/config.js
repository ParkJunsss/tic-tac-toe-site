function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; // + : 문자를 숫자로 변형
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error"); //폼 안의 첫 번째 요소에서 error 클래스를 제거한다
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault(); // 새로고침 방지
  const formData = new FormData(event.target); // 폼 데이터 묶음 객체 생성
  const enteredPlayerName = formData.get("playername").trim(); // html에 name을 가져옴, getall하면 같은 name 값 다 가져옴

  if (!enteredPlayerName) {
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data",
  );

  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;
  // if (editedPlayer === 1) {
  //   players[0].name = enteredPlayerName;
  // } else {
  //   players[1].name = enteredPlayerName;
  // }

  closePlayerConfig();
}
