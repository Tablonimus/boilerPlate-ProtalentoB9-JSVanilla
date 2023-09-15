console.log("Estamos online");

async function traerDatos() {
  try {
    const data = await fetch("http://localhost:3000/users");
    let response = await data.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(`Error en el servidor: ${error}`);
  }
}

let buttonData = document.getElementById("data");
console.log(buttonData);

buttonData.addEventListener("click", async function () {
  await traerDatos();
});
