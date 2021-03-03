let url = window.location.href;
let header = document.getElementById('header');
let search = document.getElementById('header__request');
let button = document.getElementById('header__button');
let main = document.getElementById('main');
let date = document.getElementById('date');
let img = document.getElementById('main__photo');
let login = document.getElementById('main__name');
let bio = document.getElementById('bio');
let footer = document.getElementById('footer');
let link = document.getElementById('footer__link');
let user;

let generator = () => {
  let divider = url.split('=')[1];
  if (divider) {
      name = divider;
  } else {
      name = 'Nadir-bnm';
  }
  return 'https://api.github.com/users/' + name;
};

let apiCall = generator();

let newDate = new Date().toLocaleDateString();
let getDate = new Promise((resolve, reject) => {
  setTimeout(() => newDate ? resolve(date.value = newDate) : reject('Error, please enter correct address'), 1500);
});

let refresher = function(obj) {
  login.value = obj.name;
  
  link.href = obj.html_url;
  
  bio.value = obj.bio;

  img.src = obj.avatar_url;
};

Promise.all([getDate])
.then(() => fetch(apiCall))
.then(res => res.json())
.then(obj => user = Object.assign({}, obj))
.then(user => refresher(user));



