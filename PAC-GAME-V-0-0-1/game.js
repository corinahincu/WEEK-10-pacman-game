let pac_x = 3
let pac_y = 3

let coin_x = 2
let coin_y = 2

let bomb_x  = 4
let bomb_y  = 7

let hp      = 60

let score = 0

start = 1
end   = 10





function action() {
  
  switch(event.key){
    case "ArrowUp":    pac_y-- ; break
    case "ArrowDown":  pac_y++ ; break
    case "ArrowRight": pac_x++ ; break
    case "ArrowLeft":  pac_x-- ; break
  }

  if(pac_x == coin_x & pac_y == coin_y){
    score += 10
  }
  if(pac_x == bomb_x & pac_y == bomb_y){
    score -= 20 
  } 
  renderMap()
}



function renderMap(){
    gameMap.innerHTML = ``
    for(let y = 1; y <= 10; y++ ) {
      for(let x = 1; x <= 10; x++ ) {

        if(x == pac_x && y == pac_y) {
            gameMap.innerHTML += 
                `<div class="pac"></div>`
        } else if(x == coin_x && y == coin_y){
            gameMap.innerHTML += 
                `<div class="coin"></div>`
        } else if(x == bomb_x && y == bomb_y){
          gameMap.innerHTML += 
              `<div class="bomb"></div>`
        } else {
            gameMap.innerHTML += 
                `<div></div>`
        }
  
      }
  
  }

  function action(){
    if(pac > end){
      return
    } else {
      pac++
    }
    
  }


  gameScore.innerHTML = `Score : ${score}`
  hp.innerHTML        = `Health Points : ${hp}`
}

renderMap()



// HW1: add limits (1,10) to pacman movement
// HW2: add bomb(-20), add hp (health points) 0..100
// HW3: coin_state , bomb_state - false/true < movement dar trebuie sa influenteze functioa > renderMap() ( care vor tine minte starea monedei sau bombei)
// HW4* : add more coins and bombs
// HW5* : add random coords