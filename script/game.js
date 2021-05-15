// Tanlangan fan
let localScience = localStorage.getItem('science');

const ALL_QUESTIONS = [
   {
      name: 'Informatika',
      questions: [
         {
            question: `Web dasturlash uchun eng ko'p ishlatiluvchi texnologiyalar bular:`,
            1: `Java, Python, Mashina tili...`,
            2: `C++, Css, Pascal, Excel...`,
            3: `Html, Css, Bootstrap, Javascript, Php, Phython...`,
            4: `Spring framework, Javascript, Linux, FullSpeed`,
            answer: 3,
         },
         {
            question: `Pixellar qaysi ranglardan tashkil topgan?`,
            1: `qizil, sariq, yashil`,
            2: `ko'k, qizil, oq`,
            3: `qizil, yashil, ko'k`,
            4: `oq, qora, yashil`,
            answer: 3,
         },
         {
            question: `2 sonining 5-darajasi nechiga teng?`,
            1: `32`,
            2: `10`,
            3: `16`,
            4: `64`,
            answer: 1,
         },
         {
            question: `PowerPoint dasturi qaysi companiya tomonidan ishlab chiqarilgan?`,
            1: `Linux Corparation`,
            2: `Microsoft`,
            3: `Mac`,
            4: `O'zimizning mahsulot`,
            answer: 2,
         },
         {
            question: `Apple companiyasining asoschisi kim bo'lgan`,
            1: `Bill Gates`,
            2: `Steave Jobs`,
            3: `Warren Buffern`,
            4: `Teador Ruzvelt`,
            answer: 2,
         },
         {
            question: `98767892 sonini 2ga bo'lganda qoldiq qoladimi?`,
            1: `Ha qoladi`,
            2: `To'g'ri javob yo'q`,
            3: `Yo'q qolmaydi`,
            4: `Keyingisi`,
            answer: 3,
         },
         {
            question: `Full-stack dasturchisi asosan nimalarni bilishi kerak?`,
            1: `Frontend va Backend`,
            2: `Cyber Security va Database`,
            3: `Frontend`,
            4: `Excel va Game Development`,
            answer: 1,
         },
         {
            question: `Java va Kotlin datsurlash tillari asosan qaysi platformalarda dastur tuzishda ishlatiladi?`,
            1: `IOS uchun`,
            2: `Smart Watchlar uchun`,
            3: `Android uchun`,
            4: `Asosan Web platformalar uchun`,
            answer: 3,
         },
         {
            question: `Grafik dizayn bilan ishlash uchun mos keladigan dasturlar qatorini belgilang`,
            1: `Power Point, Adobe Flash, Chrome`,
            2: `Photoshop, Adobe Xd, Adobe Illustrator`,
            3: `Sketch, WinRar, Photoshop`,
            4: `Paint, Skype, Zoom mmeting`,
            answer: 2,
         },
         {
            question: `Frontend bu nima?`,
            1: `Asosan tashqi interfeys bilash ishlaydi`,
            2: `Malumotlar bazasi bilan ishlaydi`,
            3: `Terminal bilan ishlash`,
            4: `Brauzer ishlashini taminlaydi`,
            answer: 1,
         },
      ]
   },
   {
      name: 'Matematika',
      questions: [
         {
            question: `To'g'ri kasr tarifi keltirilgan variantni belgilang`,
            1: `Surati maxrajidan kichik kasr`,
            2: `Surati maxrajidan katta kasr`,
            3: `Maxraji suratdan kichik kasr`,
            4: `Surat va Maxraj teng bo'lgan kasr`,
            answer: 1,
         },
         {
            question: `943 - 4235 - 943 + 1 + 4235 to'g'ri javobni belgilang`,
            1: `120`,
            2: `10`,
            3: `1`,
            4: `-10`,
            answer: 3,
         },
         {
            question: `Faqatgina tub sonlar ko'rsatilgan variantni belgilang`,
            1: `1, 2, 5, 7, 11`,
            2: `2, 3, 5, 7, 97`,
            3: `0, 5, 7, 11, 99`,
            4: `2, 3, 5, 8, 11`,
            answer: 2,
         },
         {
            question: `9564382 sonini 9 ga bo'lganda qoldiq qoladimi`,
            1: `Qoladi`,
            2: `Qolmaydi`,
            3: `To'g'ri javob ko'rsatilmagan`,
            4: `Keyingisi`,
            answer: 1,
         },
         {
            question: `Butun sonlar qanday belgi bilan belgilanadi`,
            1: `N`,
            2: `R`,
            3: `Z`,
            4: `To'g'ri javob ko'rsatilmagan`,
            answer: 3,
         },
         {
            question: `x + px + q = 0 ko'rinishidagi tenglama qanday tenglama`,
            1: `Chiziqli tenglama`,
            2: `Kvadrat tenglama`,
            3: `Kubik tenglama`,
            4: `A va B javoblar to'g'ri`,
            answer: 1,
         },
         {
            question: `Kasrning surati va maxrajini birxil songa ko'paytirganda...`,
            1: `Kasr 0 ga tenglashadi`,
            2: `Surat va maxrajlar yig'indisi hosil bo'ladi`,
            3: `Surat maxrajdan kichik bo'ladi`,
            4: `Uning qiymati o'zgarmaydi`,
            answer: 4,
         },
         {
            question: `49325 + 92724 - 726246 + 72497 = ifodaning oxirgi raqamini toping`,
            1: `2`,
            2: `5`,
            3: `0`,
            4: `1`,
            answer: 3,
         },
         {
            question: `Ildizosti 121 sonini xuddi shu songa ko'paytirganda qaysi son hosil bo'ladi?`,
            1: `12`,
            2: `121`,
            3: `242`,
            4: `11`,
            answer: 2,
         },
         {
            question: `Kvadrat tenglamaning diskriminanti noldan kichik bo'lsa...`,
            1: `Yechimlat to'plami bo'sh to'plam`,
            2: `Ildizga ega emas`,
            3: `2 ta ildizga ega`,
            4: `A va B javoblar to'g'ri`,
            answer: 4,
         },
      ]
   },
]

class Questions {

   // Main function
   findQuestion(science) {
      return ALL_QUESTIONS.find(item => item.name === science) || []
   }

   constructor(science, options) {

      this.questions = this.findQuestion(science).questions
      const { eachAddingScore } = options


      this.setDOMElements()
      this.setProperties(eachAddingScore)
      this.setHelperProperties()
      this.setClickHandler()

   }

   // Getters
   get result() {
      return {
         mostRecentScore: this.score,
         time: this.stopwatcher,
         science: this.localScience,
      }
   }

   setDOMElements() {
      this.$question = document.querySelector('#question');
      this.$progressText = document.querySelector('#progressText');
      this.$scoreText = document.querySelector('#score');
      this.$stopwatch = document.querySelector('#stopwatch');
      this.$proggressBarFull = document.querySelector('#proggressBarFull');
      this.$choices = Array.from(document.querySelectorAll('.choice-text'));
   }

   setProperties(eachAddingScore) {
      this.MAX_QUESTIONS = this.questions.length
      this.SCORE_POINTS = eachAddingScore
   }

   setHelperProperties() {
      this.currentQuestion = {}
      this.availableQuestion = []
      this.acceptingAnswers = true
      this.score = 0
      this.questionCounter = 0
      this.stopwatcher = 0;
   }

   setClickHandler() {
      this.$choices.forEach(choice => {
         let choicesParent = choice.parentElement

         choicesParent.addEventListener('click', this.clickHandler.bind(this, choice, choicesParent))
      })
   }

   clickHandler(choice, choicesParent) {
      if (!this.acceptingAnswers) return

      this.acceptingAnswers = false
      const selectedAnswer = choice.dataset['number']

      let classToApply = (selectedAnswer == this.currentQuestion.answer ? 'correct' : 'incorrect')

      if (classToApply === 'correct') {
         this.incrementScore()
      }
      choicesParent.classList.add(classToApply);

      setTimeout(() => {
         choicesParent.classList.remove(classToApply);
         this.getNewQuestion()
      }, 1200)
   }

   incrementScore() {
      this.score += this.SCORE_POINTS
      this.$scoreText.textContent = this.score
   }

   // Main functions
   startGame() {
      this.questionCounter = 0
      this.score = 0
      this.availableQuestion = [...this.questions]

      const stopwatchInterval = setInterval(() => {
         this.stopwatcher += 1;
         this.$stopwatch.innerHTML = this.stopwatcher;
      }, 1000)

      this.getNewQuestion(stopwatchInterval)
   }

   getNewQuestion(stopwatchInterval) {
      if (this.availableQuestion.length === 0 || this.questionCounter > this.MAX_QUESTIONS) {
         clearInterval(stopwatchInterval);

         localStorage.setItem('result', JSON.stringify(this.result))
         return window.location.assign('end.html')
      }

      this.questionCounter++;
      this.$progressText.textContent = `Question ${this.questionCounter} of ${this.MAX_QUESTIONS}`
      this.$proggressBarFull.style.width = `${(this.questionCounter / this.MAX_QUESTIONS) * 100}%`

      const questionIndex = Math.floor(Math.random() * this.availableQuestion.length)
      this.currentQuestion = this.availableQuestion[questionIndex]
      this.$question.textContent = this.currentQuestion.question

      this.$choices.forEach(choice => {
         const number = choice.dataset['number']
         choice.textContent = this.currentQuestion[number]
      })

      this.availableQuestion.splice(questionIndex, 1)

      this.acceptingAnswers = true
   }
}

const a = new Questions(localScience, { eachAddingScore: 100 })
a.startGame()

// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================

// Dom elementlar
// let question = document.querySelector('#question'),
//    progressText = document.querySelector('#progressText'),
//    scoreText = document.querySelector('#score'),
//    stopwatch = document.querySelector('#stopwatch'),
//    proggressBarFull = document.querySelector('#proggressBarFull'),
//    choices = Array.from(document.querySelectorAll('.choice-text'));

// let questions = ALL_QUESTIONS[localScience] || [];

// // Configuration
// const SCORE_POINTS = 100
// const MAX_QUESTIONS = 10


// // Helper variables
// let currentQuestion = {}
// let availableQuestion = []
// let acceptingAnswers = true
// let score = 0
// let questionCounter = 0
// let stopwatcher = 0;


// startGame = () => {
//    questionCounter = 0
//    score = 0
//    availableQuestion = [...questions]

//    const stopwatchInterval = setInterval(() => {
//       stopwatcher += 1;
//       stopwatch.innerHTML = stopwatcher;
//    }, 1000)

//    getNewQuestion(stopwatchInterval)
// }

// getNewQuestion = (stopwatchInterval) => {
//    if (availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS) {
//       clearInterval(stopwatchInterval);
//       const result = {
//          mostRecentScore: score,
//          time: stopwatcher,
//          science: localScience,
//       }

//       localStorage.setItem('result', JSON.stringify(result))
//       return window.location.assign('end.html')
//    }

//    questionCounter++;
//    progressText.textContent = `Question ${questionCounter} of ${MAX_QUESTIONS}`
//    proggressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

//    const questionIndex = Math.floor(Math.random() * availableQuestion.length)
//    currentQuestion = availableQuestion[questionIndex]
//    question.textContent = currentQuestion.question

//    choices.forEach(choice => {
//       const number = choice.dataset['number']
//       choice.textContent = currentQuestion[number]
//    })

//    availableQuestion.splice(questionIndex, 1)

//    acceptingAnswers = true
// }

// choices.forEach(choice => {
//    let choicesParent = choice.parentElement

//    choicesParent.addEventListener('click', () => {
//       if (!acceptingAnswers) return

//       acceptingAnswers = false
//       const selectedAnswer = choice.dataset['number']

//       let classToApply = (selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect')

//       if (classToApply === 'correct') {
//          incrementScore()
//       }
//       choicesParent.classList.add(classToApply);

//       setTimeout(() => {
//          choicesParent.classList.remove(classToApply);
//          getNewQuestion()
//       }, 1200)
//    })
// })

// function incrementScore() {
//    score += SCORE_POINTS
//    scoreText.textContent = score
// }


// startGame()
