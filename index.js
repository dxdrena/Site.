function verificar() {
  let idade = document.getElementById("idade").value;
  let msg = document.getElementById("msg");

  if (idade >= 18) {
    msg.innerText = "Você é de maior";
  } else {
    msg.innerText = "Você é de menor";
  }
}
