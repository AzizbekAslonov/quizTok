const DOMElement = options => {
   const { tag = 'div', value = '', classes = '', attributes = [], children = null, children_2 = null } = options

   let el = document.createElement(tag)
   el.textContent = value
   if (classes) el.classList = classes

   if (attributes.length > 1) {
      let count = 0;

      for (let index = 0; index < attributes.length / 2; index++) {
         el.setAttribute(attributes[index + count], attributes[index + count + 1])
         count++
      }
   }

   if (children) el.appendChild(children)
   if (children_2) el.appendChild(children_2)


   return el
}

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

function removeClass(collection, classNames) {
   collection.forEach(el => {
      classNames.forEach(className => {
         el.classList.remove(className)
      })
   });
}

function addClass(collection, classNames) {
   collection.forEach(el => {
      classNames.forEach(className => {
         el.classList.add(className)
      })
   });
}

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

function checkArrLength(arr = [], min, fn_success, fn_error) {
   if (arr.length > min) {
      fn_success()
   } else fn_error()
}