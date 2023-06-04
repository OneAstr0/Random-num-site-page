document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate-button");
    const fromInput = document.getElementById("from-input");
    const toInput = document.getElementById("to-input");
    const result = document.getElementById("result");
  
    generateButton.addEventListener("click", function() {
      const from = parseInt(fromInput.value, 10);
      const to = parseInt(toInput.value, 10);
  
      if (isNaN(from) || isNaN(to)) {
        result.textContent = "Введите корректные значения для от и до";
        return;
      }
  
      if (from >= to) {
        result.textContent = "Значение от должно быть меньше значения до";
        return;
      }
  
      const randomNumber = Math.floor(Math.random() * (to - from + 1)) + from;
      result.textContent = `Случайное число: ${randomNumber}`;
    });
  });
  