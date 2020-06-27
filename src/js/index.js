import '../scss/main.scss';
import '../css/main.css';
import './Login';
import './SingUp';


const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    e.preventDefault();
  });
}
