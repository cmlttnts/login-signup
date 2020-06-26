import '../scss/main.scss';
import '../css/main.css';

const loginPwdInput = document.getElementById('password-login');
const loginPwdShow = document.getElementById('password-login-show');


const signupPwdInput = document.getElementById('password-sign');
const signupPwdShow = document.getElementById('password-sign-show');


loginPwdShow.addEventListener('mouseenter',
    () => {
      loginPwdInput.setAttribute('type', 'text');
    });
loginPwdShow.addEventListener('mouseleave',
    () => {
      loginPwdInput.setAttribute('type', 'password');
    });

signupPwdShow.addEventListener('mouseenter',
    () => {
      signupPwdInput.setAttribute('type', 'text');
    });
signupPwdShow.addEventListener('mouseleave',
    () => {
      signupPwdInput.setAttribute('type', 'password');
    });


const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    e.preventDefault();
  });
}
