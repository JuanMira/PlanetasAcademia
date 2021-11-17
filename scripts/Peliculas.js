const nombrePlanetas = Array("Tierra", "Marte", "Jupiter");
const distancia = [6, 3, "67"];
const size = [78.5, 95.4, 45.2];

console.log(nombrePlanetas);
console.log(distancia);
console.log(size);

let i = 0;
while (i <= nombrePlanetas.length - 1) {
  console.log(i);
  console.log(nombrePlanetas[i]);
  i += 1;
}

for (const planeta of nombrePlanetas) {
  console.log(planeta);
}

nombrePlanetas.forEach((value, index, array) => {
  console.log("Planeta", index, value);
});

nombrePlanetas.map((planeta, index) => {
  return console.log(`El planeta ${planeta} tiene tamaño de : ${size[index]}`);
});

const resultadoMap = nombrePlanetas.map((planeta, index) => {
  return `El planeta ${planeta} tiene tamaño de : ${size[index]}`;
});

console.log(resultadoMap);
