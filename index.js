
    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = "pt-BR"

function setText(event){
    utterance.text = event.target.innerText
}
function ler(){
    speechSynthesis.speak(utterance)
}
function parar(){
    speechSynthesis.cancel()
}