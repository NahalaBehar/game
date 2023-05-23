let btn = document.getElementById("b")
let cntr = document.getElementById("counter")
let score = 0;
let time = false
let rst = document.getElementById("reset")

let open = document.getElementById("open")
let userName = document.getElementById("userName").value
let game = document.getElementById("game")
let opening = document.getElementById("opening")

game.style.display = "none"

opening.onclick=()=>{
    open.style.display = "none"
    game.style.display = "block"
}

btn.addEventListener("click", startGame)


function startGame(){
    score++
    cntr.innerHTML = score

 if(!time){
    time = true

    setTimeout(()=>{
   
        btn.removeEventListener("click", startGame)
    alert(userName+"! Game is over! Your score is: " + score)

  },5000)
}
}

rst.onclick=()=>reset()

function reset(){
    score = 0
    cntr.innerHTML = score
    time = false
   
    btn.addEventListener("click", startGame)

}



