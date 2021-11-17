const nombrePlanetas = Array("Tierra", "Marte", "Jupiter");
const distancia = [6, 3, "67"];
const size = [];

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
