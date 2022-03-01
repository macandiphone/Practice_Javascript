const menu = document.querySelector('.menu');
const menuText = document.querySelector('.menu p');
const socialLists = document.querySelector('.social-lists');
const liELs = document.querySelectorAll('.social-lists li');

menu.addEventListener('click', () => {
  socialLists.classList.toggle('hide');
  menu.classList.toggle('rotate');
});

liELs.forEach(li => {
  li.addEventListener('click', () => {
    menuText.innerHTML = li.innerHTML;
    socialLists.classList.add('hide');
    menu.classList.toggle('rotate');
  });
});
