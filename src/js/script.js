document.getElementById('hablar').addEventListener("click",()=> {
  ouvir(document.getElementById("texto").value)
})
function ouvir(texto){
  let utterThis= new SpeechSynthesisUtterance(texto);
  utterThis.lang= 'en-US';
speechSynthesis.speak(utterThis);

}
//Botões de like e hate
//Fruta
document.getElementById('likef').addEventListener("click", ()=>{
  alegrar(document.getElementById("primeiraimg"), document.getElementById("msgVal1"));
  document.getElementById("likef").style.backgroundColor="#24ed60";
})
document.getElementById('hatef').addEventListener("click", ()=>{
  entristecer(document.getElementById("primeiraimg"), document.getElementById("msgVal1"));
  document.getElementById("hatef").style.backgroundColor="#fc2654";
})

//Animais
document.getElementById('likea').addEventListener("click", ()=>{
  alegrar(document.getElementById("simg"), document.getElementById("msgVal2"));
  document.getElementById("likea").style.backgroundColor="#24ed60";
})
document.getElementById('hatea').addEventListener("click", ()=>{
  entristecer(document.getElementById("simg"), document.getElementById("msgVal2"));
  document.getElementById("hatea").style.backgroundColor="#fc2654";
})

//Números
document.getElementById('liken').addEventListener("click", ()=>{
  alegrar(document.getElementById("timg"), document.getElementById("msgVal3"));
  document.getElementById("liken").style.backgroundColor="#24ed60";
})
document.getElementById('haten').addEventListener("click", ()=>{
  entristecer(document.getElementById("timg"), document.getElementById("msgVal3"));
  document.getElementById("haten").style.backgroundColor="#fc2654";
})

//Verbos
document.getElementById('likev').addEventListener("click", ()=>{
  alegrar(document.getElementById("qimg"), document.getElementById("msgVal4"));
  document.getElementById("likev").style.backgroundColor="#24ed60";
})
document.getElementById('hatev').addEventListener("click", ()=>{
  entristecer(document.getElementById("qimg"), document.getElementById("msgVal4"));
  document.getElementById("hatev").style.backgroundColor="#fc2654";
})


//Profissões
document.getElementById('likep').addEventListener("click", ()=>{
  alegrar(document.getElementById("qtimg"), document.getElementById("msgVal5"));
  document.getElementById("likep").style.backgroundColor="#24ed60";
})
document.getElementById('hatep').addEventListener("click", ()=>{
  entristecer(document.getElementById("qtimg"), document.getElementById("msgVal5"));
  document.getElementById("hatep").style.backgroundColor="#fc2654";
})

//Cores
document.getElementById('likec').addEventListener("click", ()=>{
  alegrar(document.getElementById("stimg"), document.getElementById("msgVal6"));
  document.getElementById("likec").style.backgroundColor="#24ed60";
})
document.getElementById('hatec').addEventListener("click", ()=>{
  entristecer(document.getElementById("stimg"), document.getElementById("msgVal6"));
  document.getElementById("hatec").style.backgroundColor="#fc2654";
})

//Funções de alegrar e de entristecer
function alegrar(img, msg){
  img.src="smile.jpg"
  msg.innerText="Sério? Fico encantada por você ter gostado! Espero nunca lhe desapontar..."

}
function entristecer(img, msg){
  img.src="cry.jpg"
  msg.innerText="Por quê?!? Eu esperava tanto que você gostasse!!! Peço mil desculpas por isso!"

}