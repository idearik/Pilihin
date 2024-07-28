document.addEventListener('DOMContentLoaded', () => {
    const inputForm = document.getElementById('inputForm');
    const inputContainer = document.getElementById('inputContainer');
    const addMoreButton = document.getElementById('addMore');
    const pilihinButton = document.getElementById('pilihinButton');
    const clickSound = new Audio('/sounds/click.wav');
    const resultSound = new Audio('/sounds/result.wav');
  
    addMoreButton.addEventListener('click', () => {
      const inputCount = inputContainer.getElementsByTagName('input').length;
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newInput.name = 'inputs[]';
      newInput.placeholder = `Input ${inputCount + 1}`;
      inputContainer.appendChild(newInput);
      checkInputs();
    });
  
    inputForm.addEventListener('input', checkInputs);
  
    function checkInputs() {
      const inputs = inputContainer.getElementsByTagName('input');
      let filledCount = 0;
      for (const input of inputs) {
        if (input.value.trim() !== '') {
          filledCount++;
        }
      }
      pilihinButton.disabled = filledCount < 2;
    }
  
    inputForm.addEventListener('submit', (event) => {
      clickSound.play();
    });
  
    const resultElement = document.querySelector('.result p');
    if (resultElement) {
      resultSound.play();
    }
  
    checkInputs();
  });
  