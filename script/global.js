// Global Functions
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

function checkArrLength(arr = [], min, fn_success, fn_error) {
   if (arr.length > min) fn_success()
   else fn_error()
}