const btnCollection = [
   { data: 'Informatika', icon: 'fas fa-laptop-code', classes: 'btn scale btn-primary' },
   { data: 'Matematika', icon: 'fas fa-calculator', classes: 'btn scale btn-secondary' },
]

let buttons = document.querySelector('.buttons');

btnCollection.forEach(btn => {
   const buttonEl = DOMElement({
      tag: 'a',
      value: btn.data + ' ',
      classes: btn.classes,
      attributes: ['data-science', btn.data],
      children: DOMElement({ tag: 'i', classes: btn.icon })
   })

   buttonEl.addEventListener('click', () => {
      localStorage.setItem('science', btn.data);
      location.assign('game.html');
   })

   buttons.insertAdjacentElement('beforeend', buttonEl)

})
