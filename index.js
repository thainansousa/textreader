const utterance = new SpeechSynthesisUtterance();
utterance.lang = "pt-BR"

function ler(){
    const txtdigitado = document.querySelector(".fields textarea").value
    utterance.text = txtdigitado
    speechSynthesis.speak(utterance)
}
function parar(){
    speechSynthesis.cancel()
}