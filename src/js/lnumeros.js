

  for(var i=1;i<=9;i++){
    
    const buttom_container= document.getElementsByClassName(`lcard${i}`)[0];
    const idSom= "en"+i;
    console.log(buttom_container);
    buttom_container.addEventListener("click", ()=>{
     
      ouvir(document.getElementById(idSom).innerText);
      console.log(document.getElementById(idSom), idSom);
    }
    )
  }


// 


function ouvir(texto){
  let utterThis= new SpeechSynthesisUtterance(texto);
  utterThis.lang= 'en-US';
speechSynthesis.speak(utterThis);
}