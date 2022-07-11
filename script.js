const totalScore={computerScore:0,playScore:0}


function getComputerChoice() {
  const rpsChoice=["Rock","Paper","Scissors"]
  const randomNumber=Math.floor(Math.random()*3)
  return rpsChoice[randomNumber]
}

function getResult(playerChoice, computerChoice) {

  let score;
  if(playerChoice==computerChoice){
    score=0
  }else if(playerChoice=="Rock"&&computerChoice=="Scissors"){
    score=1
  }
  else if(playerChoice=="Paper"&&computerChoice=="Rock"){
    score=1
  }
  else if(playerChoice=="Scissors"&&computerChoice=="Paper"){
    score=1
  }else{
    score=-1
  }
  return score
}

  


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
let result=document.getElementById("result")

function showResult(score, playerChoice, computerChoice) {
  const resultDiv=document.getElementById("result")
  const handsDiv=document.getElementById("hands")
  const playScoreDiv=document.getElementById("player-score")

  if(score==-1){
    resultDiv.innerText="You lose!"
  }else if(score==0){
    resultDiv.innerText="It's tie!"
  }else{
   resultDiv.innerText="You won!"
  }
  handsDiv.innerText=`${playerChoice} vs ${playerChoice}`
  playScoreDiv.innerText=`Your score is ${totalScore['playScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({playerChoice})
  const computerChoice=getComputerChoice()
  console.log({computerChoice})
  const score=getResult(playerChoice,computerChoice)
  totalScore["playScore"]+=score
  console.log({score})
  showResult(score,playerChoice,computerChoice)
}



function playGame() {

    const rpsButtons=document.querySelectorAll(".rpsButton")
 
rpsButtons.forEach(rpsButton=>{
    rpsButton.onclick=()=>onClickRPS(rpsButton.value)
})
const endGameButton=document.getElementById("endGameButton")
endGameButton.onclick=()=>endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    totalScore["playScore"]=0
    totalScore["computerScore"]=0
    const resultDiv=document.getElementById("result")
    const handsDiv=document.getElementById("hands")
    const playScoreDiv=document.getElementById("player-score")
    resultDiv.innerText=''
    handsDiv.innerText=''
    playScoreDiv.innerText=''
}

playGame()