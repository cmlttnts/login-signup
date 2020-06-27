(function initSignup() {

  const signupPwdInput = document.getElementById('password-sign');
  const signupPwdShow = document.getElementById('password-sign-show');


  signupPwdShow.addEventListener('mouseenter',
      () => {
        signupPwdInput.setAttribute('type', 'text');
      });
  signupPwdShow.addEventListener('mouseleave',
      () => {
        signupPwdInput.setAttribute('type', 'password');
      });

})();
