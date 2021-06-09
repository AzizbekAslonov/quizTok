// Generate teplate
function generateModelHtml(num) {
   let res = [{ type: 'scienceName', tag: 'input', name: 'scienceName', label: 'Fan nomini kiriting :', questionIndex: 'none' },]


   for (let i = 1; i <= num; i++) {
      res.push({
         type: 'question',
         tag: 'input',
         name: `question_${i}`,
         label: `${i}-savolni kiriting :`,
         questionIndex: i,
         checkboxes: [
            { variant: 'A', },
            { variant: 'B', },
            { variant: 'C', },
         ]
      })
   }

   return res
}

// Get Values
function getAllInformation() {
   const textForms = document.querySelector('form[data-index="none"]')
   const textAndRadForms = document.querySelectorAll('form.questionContainer')

   const data = {
      name: textForms.scienceName.value,
      questions: []
   }

   textAndRadForms.forEach(form => {
      const formData = new FormData(form)
      const myValues = {}

      for (let [key, value] of formData.entries()) {
         if (key.includes('answer_')) myValues["answer"] = value

         else myValues[key] = value
      }

      data.questions.push(myValues)
   })
   return data
}

function setCheckboxes(checkboxes, inputContainer) {
   const answersEl = DOMElement({ tag: 'div', classes: 'answers' })

   let currentCheckboxIndex = 0;

   function checkAndAdd(valueLen, index) {
      if (valueLen > 0 && index < checkboxes.length) {
         const { answerBlockEl, newCurrentCheckboxIndex } = createByOne(currentCheckboxIndex, checkboxes, checkAndAdd, inputContainer.dataset.index)
         currentCheckboxIndex = newCurrentCheckboxIndex
         answersEl.appendChild(answerBlockEl)
      }
   }

   const { answerBlockEl, newCurrentCheckboxIndex } = createByOne(currentCheckboxIndex, checkboxes, checkAndAdd, inputContainer.dataset.index)
   currentCheckboxIndex = newCurrentCheckboxIndex
   answersEl.appendChild(answerBlockEl)

   inputContainer.appendChild(answersEl)
}

// Validate big
const setCheckInpContainers = (block) => {
   const collection = block.querySelectorAll('.input-container')

   let errors = [];
   // debugger
   collection.forEach(inputContainer => {
      // Validation input container

      const inputs = inputContainer.querySelectorAll('input')
      inputContainer.classList.remove('_error')

      let isErrorText, checkedCount;

      if (!inputContainer.classList.contains('questionContainer')) {
         isErrorText = checkInputCollectionNotEmpthy(inputs, true)
         checkedCount = 1
      } else {
         const validateAnswer = checkInputCollectionNotEmpthy(inputs)

         isErrorText = validateAnswer.isErrorText
         checkedCount = validateAnswer.checkedCount
      }


      if (isErrorText) errors.push(true)
      else if (checkedCount === 0) {
         alert(`To'g'ri javobni kiriting!`)
         inputContainer.classList.add('_error')
         errors.push(true)
      }
      else errors.push(false)

   })

   return errors
}

// Validate helper
function checkInputCollectionNotEmpthy(inputs, isOnlyText = false) {
   let isErrorText = false;
   let checkedCount = 0;

   inputs.forEach(el => {

      // Input text
      if (el.type === 'text') {
         // Remove all classes
         removeClass([el], ['_error', '_success'])

         if (el.value.length === 0) {
            // Error
            addClass([el], ['_error'])
            isErrorText = true

         } else {
            // Success
            addClass([el], ['_success'])
         }
      }

      else if (el.type === 'radio') {
         // Input radio
         if (el.checked) checkedCount++
      }
   })

   if (isOnlyText) return isErrorText
   else return { isErrorText, checkedCount }

}