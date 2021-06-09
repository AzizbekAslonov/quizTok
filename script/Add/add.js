let scienceInputs = document.querySelector('#science-inputs');

let textFields = generateModelHtml(2);

// Starter Position
renderTextFields(textFields[0])

function btnHandler() {
   let indexTextFields = 1

   const addBtn = document.querySelector('#add')

   addBtn.addEventListener('click', function () {
      // All inputs on $scienceInputs
      const collectionInputCnt = setCheckInpContainers(scienceInputs, textFields)

      // Всё ли Ок?
      const accessToNext = collectionInputCnt.every(item => item === false)

      // Check input value length & validation
      if (indexTextFields < textFields.length && accessToNext) {
         renderTextFields(textFields[indexTextFields])
         indexTextFields++

      } else {
         if (indexTextFields === textFields.length && accessToNext) {
            this.remove()

            const goBtn = DOMElement({ tag: 'button', value: `Hammasi to'g'rimi ?`, classes: `btn btn-sm btn-secondary scale` })
            goBtn.addEventListener('click', () => {
               const data = getAllInformation()

               localStorage.setItem('myScience', JSON.stringify(data))
               location.assign('science.html')

            }, { once: true })
            document.querySelector('#buttons').prepend(goBtn)
         }
      }
   })
}

// Set btn click
btnHandler()

function renderTextFields(inp) {
   const inputEl = DOMElement({
      tag: inp.tag,
      attributes: [
         'name', inp.type,
         'id', inp.name,
         'type', 'text',
         'autocomplete', 'off',
      ],
   })

   const label = DOMElement({
      tag: 'label',
      attributes: ['for', inp.name],
      children: DOMElement({ tag: 'span', classes: 'mb', value: inp.label }),
      children_2: inputEl,
   })

   const inputContainer = DOMElement({
      tag: 'form',
      classes: 'input-container',
      attributes: ['data-index', inp.questionIndex],
      children: label
   })

   if (inp.type === 'question') {
      inputContainer.classList.add('questionContainer')
      setCheckboxes(inp.checkboxes, inputContainer)
   }

   scienceInputs.insertAdjacentElement('beforeend', inputContainer)
}

function createByOne(currentCheckboxIndex, checkboxes, checkAndAdd, checkboxGroupIndex) {
   const checkboxEl = DOMElement({
      tag: 'input',
      attributes: [
         'name', `answer_${checkboxGroupIndex}`,
         'type', 'radio',
         'value', currentCheckboxIndex + 1
      ]
   })

   const inputEl = DOMElement({
      tag: 'input',
      attributes: [
         'type', 'text',
         'autocomplete', 'off',
         'name', currentCheckboxIndex + 1,
         'placeholder', checkboxes[currentCheckboxIndex].variant
      ]
   })

   const answerBlockEl = DOMElement({
      tag: 'div',
      classes: 'answers__item',
      children: checkboxEl,
      children_2: inputEl,
   })
   currentCheckboxIndex++
   // BUG HERE
   inputEl.addEventListener('input', (e) => checkAndAdd(e.target.value.length, currentCheckboxIndex), { once: true })



   return { answerBlockEl, newCurrentCheckboxIndex: currentCheckboxIndex }
}
