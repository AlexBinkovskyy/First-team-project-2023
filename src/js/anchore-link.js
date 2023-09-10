 /*
 Створено, для того, щоб якірні 
 посилання переміщували вюпорт 
 на 120 пікселів вище ніж 
 початок секції. 
 
 Також повинно додати плавну 
 анімацію прокрутки до 
 секції
 */
 
 // Додаємо обробник події для якірних посилань
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1); // Отримуємо ідентифікатор цільового елемента
      const targetElement = document.getElementById(targetId); // Знаходимо цільовий елемент

      if (targetElement) {
          // Прокручуємо сторінку до цільового елемента з урахуванням зміщення
          window.scrollTo({
              top: targetElement.offsetTop - 120, // Зміщуємо вверх на 200 пікселів
              behavior: 'smooth' // Плавна анімація прокрутки (за бажанням)
          });
      }
  });
});