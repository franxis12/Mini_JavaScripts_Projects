const frutas = [
  "Manzana", "Banana", "Naranja", "Pera", "Sandía", "Melón",
  "Kiwi", "Mango", "Piña", "Fresa", "Uva", "Papaya", "Durazno",
  "Cereza", "Frambuesa", "Limón", "Lima", "Granada", "Mandarina", "Guayaba"
];

const ul = document.getElementById("result");

// Función para mostrar una lista de frutas
function renderFrutas(lista) {
  ul.innerHTML = ""; // Limpia resultados anteriores

  if (lista.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found";
    li.classList.add("text-gray-500", "p-2");
    ul.appendChild(li);
    return;
  }

  lista.forEach(fruta => {
    const li = document.createElement("li");
    li.textContent = fruta;
    li.classList.add("p-2", "hover:bg-gray-100", "cursor-pointer");
    ul.appendChild(li);
  });
}

// Mostrar todas al cargar
//renderFrutas(frutas);

const buscador = document.getElementById("search");

buscador.addEventListener("input", function () {
  const texto = buscador.value.toLowerCase();

  const resultado = frutas.filter(fruta =>
    fruta.toLowerCase().includes(texto)
  );

  renderFrutas(resultado);
});