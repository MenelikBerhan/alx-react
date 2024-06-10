/* eslint-disable no-undef */
import logo from './logo.jpg';
import closeIcon from './close-icon.png';
import './App.css';

// Notifications
const notifications = document.createElement('div');
notifications.className = 'Notifications';
notifications.innerHTML = '<p>Here is the list of notifications</p>';

const button = document.createElement('button');
button.style.position = 'absolute';
button.style.right = '3rem';
button.style.top = '1.5rem';
button.style.border = 'none';
button.style.padding = '0';
button.ariaLabel = 'Close';
// eslint-disable-next-line no-console
button.onclick = () => console.log('Close button has been clicked');

const closeImg = document.createElement('img');
closeImg.src = closeIcon;
closeImg.alt = 'close notifications icon';
closeImg.width = 16;

button.append(closeImg);

const list = document.createElement('ul');
// eslint-disable-next-line no-multi-str
list.innerHTML = "<li data='default'>New course available</li>\
  <li data='urgent'>New resume available</li>\
  <li data='urgent'><strong>Urgent requirement</strong> - complete by EOD</li>";

notifications.append(button, list);

// Header
const header = document.createElement('header');
header.classList.add('App-header');

const image = document.createElement('img');
image.src = logo;
image.alt = 'Holberton logo';
image.height = 200;
image.width = 200;

const heading = document.createElement('h1');
heading.innerHTML = 'School dashboard';

header.append(image, heading);

// Main Body
const main = document.createElement('div');
main.className = 'App-body';

const formHeading = document.createElement('p');
formHeading.innerHTML = 'Login to access the full dashboard';

const form = document.createElement('form');
// eslint-disable-next-line no-multi-str
form.innerHTML = '<div class="form-entry" style="display: inline-block; padding-right: 1rem;">\
<label for="email" style="padding-right: 1rem;">Email:</label>\
<input\
  type="email"\
  id="email"\
  name="user_email"\
  autoComplete="username">\
</input>\
</div>\
<div class="form-entry" style="display: inline-block; padding-right: 1rem;">\
<label for="password" style="padding-right: 1rem;">Password:</label>\
<input\
  type="password"\
  id="password"\
  name="user_password"\
  autoComplete="current-password">\
</input>\
</div>\
<button class="form-buttom" type="submit">OK</button>';

main.append(formHeading, form);

function getFullYear() {
  const date = new Date();
  return (date.getFullYear());
}

function getFooterCopy(isIndex) {
  if (isIndex) {
    return ('Holberton School');
  }
  return ('Holberton School main dashboard');
}

// Footer
const footer = document.createElement('footer');
footer.className = 'App-footer';
footer.innerHTML = `<p>Copyright ${getFullYear()} - ${getFooterCopy(true)}</p>`;

document.body.append(notifications, header, main, footer);
