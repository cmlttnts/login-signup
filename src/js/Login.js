(function initLogin() {
  const loginPwdInput = document.getElementById('password-login');
  const loginPwdShow = document.getElementById('password-login-show');


  loginPwdShow.addEventListener('mouseenter',
      () => {
        loginPwdInput.setAttribute('type', 'text');
      });
  loginPwdShow.addEventListener('mouseleave',
      () => {
        loginPwdInput.setAttribute('type', 'password');
      });
})();
