class Questions {

   // Main function
   findQuestion(science) {
      return ALL_QUESTIONS.find(item => item.name === science)
   }

   constructor(science, options) {
      this.localScience = science
      this.questions = this.findQuestion(science).questions || []

      if (this.questions.length > 0) {
         const { eachAddingScore, variants } = options

         this.setProperties(eachAddingScore, variants)
         this.setDOMElements()
         this.setClicksToChoices()
         this.setHelperProperties()
      } else {
         alert('Error 404, questions is not defined!')
      }


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
      this.$variants = document.querySelector('#variants');
   }

   setClicksToChoices() {

      checkArrLength(this.VARIANTS, 1, fn_suceess.bind(this), () => alert('Error'))

      function fn_suceess() {
         this.$choices = []

         this.VARIANTS.forEach((variant, index) => {

            const choice = DOMElement({ tag: 'p', classes: 'choice-text', attributes: ['data-number', index + 1] })

            const cnt = DOMElement({
               tag: 'div',
               classes: 'choice-container scale',
               children: DOMElement({ tag: 'div', classes: 'choice-prefix', value: variant }),
               children_2: choice
            })

            cnt.addEventListener('click', this.clickHandler.bind(this, choice, cnt))

            this.$variants.appendChild(cnt)
            this.$choices.push(choice)
         })
      }
   }

   setProperties(eachAddingScore, variants) {
      this.MAX_QUESTIONS = this.questions.length
      this.SCORE_POINTS = eachAddingScore
      this.VARIANTS = variants

   }

   setHelperProperties() {
      this.currentQuestion = {}
      this.availableQuestion = []
      this.acceptingAnswers = true
      this.score = 0
      this.questionCounter = 0
      this.stopwatcher = 0;
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

