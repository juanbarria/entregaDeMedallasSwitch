let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let posicionLlegada: number = Number(dato1.value);
  switch (posicionLlegada) {
    case 1:
      console.log("Entregar medalla de oro");
      break;
    case 2:
      console.log("Entregar medalla de plata");
      break;
    case 3:
      console.log("Entregar medalla de bronce");
      break;
    default:
      console.log("Entregar mención de participación");
  }
});
