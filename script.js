//Adicione aqui as matérias de estudo para serem sorteadas.
const estudar = ["Arrow Functions", "AJAX", "Classes", "Arrays", "async await"];
let tamanho = estudar.length; //tamanho do array
let y = 0;
let tema = "";

//sorteia o tema de estudo do dia, baseado na lista acima
function sortear() {
  let rand = Math.floor(rad(y, tamanho));
  tema = estudar[rand];
  return displaytema(tema);
}
//exibe o tema de estudos no HTML
function displaytema(text) {
  return (document.getElementById("result").innerHTML = text);
}
function rad(min, max) {
  min = Math.ceil(y);
  max = Math.floor(tamanho);
  return Math.floor(Math.random() * (max - min - 1) + min); // The maximum is inclusive and the minimum is inclusive
}