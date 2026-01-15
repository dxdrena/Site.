function verificar() {
  const idade = document.getElementById("idade").value;
  const msg = document.getElementById("msg");

  if (idade === "") {
    msg.innerText = "Digite uma idade";
  } else if (idade < 18) {
    msg.innerText = "Você é menor de idade 👶";
  } else {
    msg.innerText = "Você é maior de idade 😎";
  }
}
