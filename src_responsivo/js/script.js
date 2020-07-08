document.getElementById('hablar').addEventListener("click",()=> {
  ouvir(document.getElementById("hablar").innerText)
})

function ouvir(texto){
  let utterThis= new SpeechSynthesisUtterance(texto);
  utterThis.lang= 'en-US';
speechSynthesis.speak(utterThis);
}