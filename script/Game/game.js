// Tanlangan fan
let localScience = localStorage.getItem('science');

// Zavadskoy
if (realSciences.includes(localScience)) {
   const a = new Questions(localScience, {
      eachAddingScore: 100,
      variants: ['A', 'B', 'C', 'D']
   })

   a.startGame()
}

// Lichniy
else {
   const all_data = JSON.parse(localStorage.getItem('myScience') || '[]')

   if (localScience === all_data.name) {
      ALL_QUESTIONS.push(all_data)
      const a = new Questions(all_data.name, {
         eachAddingScore: 100,
         variants: ['A', 'B', 'C'],
      })

      a.startGame()
   }

}