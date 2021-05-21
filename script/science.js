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

function getUserSciences() {
   let userSciences = document.querySelector('#user-sciences');
   const data = JSON.parse(localStorage.getItem('myScience') || '[]')


   checkArrLength(data.questions, 0, fn_success, fn_error)

   function fn_success() {
      userSciences.innerHTML = ''
      const errView = DOMElement({ tag: 'div', classes: 'alert alert-success text-white mb', value: `Siz tomondan qo'shilgan fanlar` })

      const buttonEl = DOMElement({
         tag: 'a',
         value: data.name,
         classes: 'btn btn-primary scale',
         attributes: ['data-science', data.name],
         // children: DOMElement({ tag: 'i', classes: btn.icon })
      })

      buttonEl.addEventListener('click', () => {
         localStorage.setItem('science', buttonEl.dataset.science)
         location.assign('game.html')
      })

      userSciences.appendChild(errView)
      userSciences.appendChild(buttonEl)

   }

   function fn_error() {
      const errView = DOMElement({
         tag: 'div',
         classes: 'alert alert-warning text-white',
         value: `O'zingizga mos fanni topolmadingizmi?`,
         children: DOMElement({ tag: 'a', value: `Fan qushish`, attributes: ['href', 'add.html', 'style', 'display: block;'] })
      })
      userSciences.appendChild(errView)
   }
}

getUserSciences()