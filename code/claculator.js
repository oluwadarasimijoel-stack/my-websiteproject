 const buttons = document.querySelectorAll('.for, .foik, .fo, .fak, .dam, .fak, .clear');
  const inputField = document.getElementById('se');
    buttons.forEach(button => {
    button.addEventListener('click', () => {
      inputField.value += button.textContent;
    });
  });
   const clearButton = document.querySelector('.clear');
  clearButton.addEventListener('click', () => {
    inputField.value = ''; 
     });
      const equalsButton = document.querySelector('.clear');
  equalsButton.addEventListener('click', () => {
    try {
      inputField.value = eval(inputField.value);
    } catch (error) {
      
      inputField.value = "Error";
    }
  });
  const dambutton = document.querySelector('.dam')
  dambutton.addEventListener('click', () => {inputField.value = '';

  });
