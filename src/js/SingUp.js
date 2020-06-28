(function initSignup() {

  const signupPwdInput = document.getElementById('password-sign');
  const signupPwdShow = document.getElementById('password-sign-show');

  const signupConfPwdInput = document.getElementById('password-confirm-sign');
  const signupConfPwdShow = document.getElementById('password-confirm-sign-show');


  addMouseEnterShow(signupPwdInput, signupPwdShow);
  addMouseLeaveShow(signupPwdInput, signupPwdShow);

  addMouseEnterShow(signupConfPwdInput, signupConfPwdShow);
  addMouseLeaveShow(signupConfPwdInput, signupConfPwdShow);

  /**
   * Add mouseenter event listener for text type
   * @param {HtmlInputElement} pwdInput
   * @param {HtmlImageElement} pwdShowImg
   */
  function addMouseEnterShow(pwdInput, pwdShowImg) {
    pwdShowImg.addEventListener('mouseenter',
        () => {
          pwdInput.setAttribute('type', 'text');
        },
    );
  }
  /**
   * Add mouseleave event listener for password type
   * @param {HtmlpwdInput} pwdInput
   * @param {HtmlImageElement} pwdShowImg
   */
  function addMouseLeaveShow(pwdInput, pwdShowImg) {
    pwdShowImg.addEventListener('mouseleave',
        () => {
          pwdInput.setAttribute('type', 'password');
        },
    );
  }


})();
