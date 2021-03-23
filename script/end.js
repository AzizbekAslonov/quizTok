const userName = document.querySelector('#userName'),
   saveScoreBtn = document.querySelector('#saveScoreBtn'),
   finalScore = document.querySelector('#finalScore'),
   time = document.querySelector('#time'),
   result = JSON.parse(localStorage.getItem('result')),
   hightScores = JSON.parse(localStorage.getItem('hightScores')) || [];

finalScore.textContent = result.mostRecentScore + ' ball'
time.textContent = result.time + 's'

userName.addEventListener('keyup', () => {
   saveScoreBtn.disabled = !userName.value
})

function saveScore(e) {
   e.preventDefault()

   const score = {
      score: result.mostRecentScore,
      name: userName.value,
      science: result.science,
      time: result.time,
   }

   hightScores.push(score);

   hightScores.sort((a, b) => {
      return b.score - a.score
   });
   // hightScores.splice(6);
   localStorage.setItem('hightScores', JSON.stringify(hightScores))
   window.location.assign('index.html')
}