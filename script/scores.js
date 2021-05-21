const scoresList = document.querySelector('#scoresList')
const LOCAL_SCORES = JSON.parse(localStorage.getItem('hightScores') || '[]')

const SCIENCES = {}

LOCAL_SCORES.forEach(element => {
   const keys = Object.keys(SCIENCES)
   if (keys.length > 0) {
      let isAdd = true
      keys.forEach(scienceName => {
         if (scienceName === element.science) {
            SCIENCES[scienceName].push(element)
            isAdd = false
         }
      })

      if (isAdd) {
         SCIENCES[element.science] = [element]
      }

   } else {
      SCIENCES[element.science] = [element]
   }
})

for (const key in SCIENCES) {
   if (Object.hasOwnProperty.call(SCIENCES, key)) {
      const eachArray = SCIENCES[key];
      scoresList.appendChild(createHtmlForScience(eachArray, key))
   }
}

function createHtmlForScience(item, key) {

   if (item.length > 0) {
      const PARENTDIV = createDomEl('div', ['scores'], '')

      let header = createDomEl('div', ['science-name'], item[0].science)

      PARENTDIV.appendChild(header)

      item.forEach((elem, index) => {
         let span_1 = createDomEl('span', ['p-2'], `${index + 1}) ${elem.name} : ${elem.score}`)
         let span_2 = createDomEl('span', ['p-2'], `${elem.time}s`)

         let content = createDomEl('div', ['hight-score', 'd-flex'], '')

         // Appends
         content.appendChild(span_1)
         content.appendChild(span_2)
         PARENTDIV.appendChild(content)
      })

      return PARENTDIV
   }
   else {
      let header = document.createElement('div');
      header.classList.add('science-name');
      header.textContent = `${key} fanidan ballar yo\'q!`

      return header
   }
}


function createDomEl(el, classes = [], text = '') {
   let a = document.createElement(el);
   a.classList += classes.join(' ');
   a.textContent = text

   return a
}