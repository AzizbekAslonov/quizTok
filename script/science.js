let buttons = document.querySelectorAll('.science_btn')

for (let i = 0; i < buttons.length; i++) {
   const btn = buttons[i];

   btn.addEventListener('click', () => {
      let data = btn.dataset['science'];

      localStorage.setItem('science', data);
      location.assign('game.html');
   })
}
