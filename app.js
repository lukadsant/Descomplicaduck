const buttonEnable = document.querySelector('.enable-answer')
const buttonDisable = document.querySelector('.disable-answer')



document.addEventListener("DOMContentLoaded", function () {
    const psychButton = document.getElementById("psychic-button");
    const waterPulseButton = document.getElementById("Whirlpool-button");
    const moveDescription = document.querySelector(".move-description");
  
    psychButton.addEventListener("mouseover", function () {
      moveDescription.textContent = "Utilizar poderes psiquicos para causar cocegas na página, e ter 90% de chance de revelar um item valioso que está oculto.";
    });
  
    waterPulseButton.addEventListener("mouseover", function () {
      moveDescription.textContent = "Utilizar poderes áquaticos para prender o alvo em um violento redemoinho, Talvez você também fique tonto...";
    });
  });

const _Psychic = () => {
    const elementoQuestionSolutions = document.querySelector('.question__solutions');
    
    if (elementoQuestionSolutions) {
        elementoQuestionSolutions.classList.add('question__solutions--show');
        const botaoVoltarQuestao = document.querySelector('.question__solutions--show button');
        botaoVoltarQuestao.click();

    } else {
        console.log('Elemento question__solutions não encontrado.');
        alert('Ei, o item Especifico não foi encontrado, Agora o psyduck está bem confuso....');
        audiodir='https://www.myinstants.com/media/sounds/mac-quack.mp3'
        var audio = new Audio(audiodir);
        audio.play();
    }
    
}

const _Whirlpool  = () => {

  const pageElement = document.documentElement || document.body;

  pageElement.style.transition = 'transform 2s ease-in-out';
  pageElement.style.transform = 'rotate(360deg)';

  setTimeout(() => {
    pageElement.style.transition = '';
    pageElement.style.transform = '';
  }, 2000);

}
  

buttonEnable.addEventListener('click', async (event) => { 
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: _Psychic,
    })
})

buttonDisable.addEventListener('click', async (event) => { 
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    
    
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: _Whirlpool,
    })
})


