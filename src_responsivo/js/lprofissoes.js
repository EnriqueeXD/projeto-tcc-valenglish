
  for(var i=1;i<=9;i++){
    let idIcone= "audio"+i;
    let idSom= "en"+i;
    document.getElementById(idIcone).addEventListener("click", ()=> 
    {
        ouvir(document.getElementById(idSom).innerText);
      }
    );
}




function ouvir(texto){
  let utterThis= new SpeechSynthesisUtterance(texto);
  utterThis.lang= 'en-US';
speechSynthesis.speak(utterThis);
}