(function progressBar() {

  let currentStep = 1;
  const NUM_OF_STEPS = 3;
  // Pages
  const page1 = document.querySelector('.signup-page1');
  const page2 = document.querySelector('.signup-page2');
  const page3 = document.querySelector('.signup-page3');

  // Progress Bar elements
  // const step1 = document.querySelector('.step1');
  const step2s = [...document.querySelectorAll('.step2')];
  const step3s = [...document.querySelectorAll('.step3')];

  // Buttons
  const signUpB = document.querySelector('.submitB');
  signUpB.addEventListener('click',
      (e) => {
        e.preventDefault();
        console.log('Send the form');
      });

  const backB = document.querySelector('.backB');
  backB.addEventListener('click',
      (e) => {
        if (currentStep > 1) currentStep--;
        console.log('Go Back 1 Page', currentStep);
        makePage(currentStep);
      });
  const forwB = document.querySelector('.forwB');
  forwB.addEventListener('click',
      (e) => {
        if (currentStep < NUM_OF_STEPS) currentStep++;
        console.log('Go Forward 1 Page', currentStep);
        makePage(currentStep);
      });


  /**
 * handles the state logic
 * @param {number} curState
 */
  function makePage(curState) {
    switch (curState) {
      case 1:
        // Handle Page and button Logic
        page1.style.display = 'block';
        page2.style.display = 'none';
        page3.style.display = 'none';
        signUpB.setAttribute('disabled', 'disabled');
        backB.setAttribute('disabled', 'disabled');
        forwB.removeAttribute('disabled');

        // Handle Progress Bar logic
        step2s.map((el) => {
          el.classList.remove('active');
        });
        step3s.map((el) => {
          el.classList.remove('active');
        });

        break;
      case 2:
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'none';
        signUpB.setAttribute('disabled', 'disabled');
        backB.removeAttribute('disabled');
        forwB.removeAttribute('disabled');

        step2s.map((el) => {
          el.classList.add('active');
        });
        step3s.map((el) => {
          el.classList.remove('active');
        });
        break;
      case 3:
        page1.style.display = 'none';
        page2.style.display = 'none';
        page3.style.display = 'block';
        backB.removeAttribute('disabled');
        signUpB.removeAttribute('disabled', 'disabled');
        forwB.setAttribute('disabled', 'disabled');

        step2s.map((el) => {
          el.classList.add('active');
        });
        step3s.map((el) => {
          el.classList.add('active');
        });
        break;
      default:
        break;
    }
  }

})();
