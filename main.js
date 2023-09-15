console.log("Estamos online");

async function traerDatos() {
  const data = await fetch("http://localhost:3000/users");
  let response = await data.json();
  console.log(response);
  return response;
}

let buttonData = document.getElementById("data");
console.log(buttonData);

buttonData.addEventListener("click", async function () {
  await traerDatos();
});
