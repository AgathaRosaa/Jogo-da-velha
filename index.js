let player='player1'
let array=[['','',''], ['','',''], ['','','']]

let regions= document.querySelectorAll('#table tr td').forEach(function(element){
    element.addEventListener('click', play)
})

function start(){
    let playerName= document.getElementById(player)
    let playerInput= document.getElementById('turnPlayer').innerText="Vez de: " + playerName.value
}


function disable(ev){
 ev.removeEventListener('click', play)
}

function reset(){
    window.location.reload()
}

    function getWinRegions() {
        const winRegions = []
        if (array[0][0] && array[0][0] === array[0][1] && array[0][0] === array[0][2])
          winRegions.push("0.0", "0.1", "0.2")
        if (array[1][0] && array[1][0] === array[1][1] && array[1][0] === array[1][2])
          winRegions.push("1.0", "1.1", "1.2")
        if (array[2][0] && array[2][0] === array[2][1] && array[2][0] === array[2][2])
          winRegions.push("2.0", "2.1", "2.2")
        if (array[0][0] && array[0][0] === array[1][0] && array[0][0] === array[2][0])
          winRegions.push("0.0", "1.0", "2.0")
        if (array[0][1] && array[0][1] === array[1][1] && array[0][1] === array[2][1])
          winRegions.push("0.1", "1.1", "2.1")
        if (array[0][2] && array[0][2] === array[1][2] && array[0][2] === array[2][2])
          winRegions.push("0.2", "1.2", "2.2")
        if (array[0][0] && array[0][0] === array[1][1] && array[0][0] === array[2][2])
          winRegions.push("0.0", "1.1", "2.2")
        if (array[0][2] && array[0][2] === array[1][1] && array[0][2] === array[2][0])
          winRegions.push("0.2", "1.1", "2.0")
        return winRegions
      }
    
      function gameOver(ev){
        ev.forEach(function(element){
        document.querySelector('[data-region= "' + element +'"]').classList.add('win')
        })
        const playerName= document.getElementById(player).value
        document.getElementById('turnPlayer').innerHTML='Jogador(a) ' + playerName + ' venceu!'

      }

function play(ev){
    let span= ev.currentTarget
    let region= span.dataset.region
    let rowColumn= region.split('.')
    let row=rowColumn[0]
    let column=rowColumn[1]
    
    if(player==='player1'){
        span.innerHTML='X'
        array[row][column]='X'
    }
    else{
        span.innerHTML='O'
        array[row][column]='O'
    }
   

    console.table(array)
    disable(span)
   
   let win= getWinRegions()
    if(win.length>0){
    gameOver(win)
    }

  else if(array.flat().includes('')){
    player= player==='player1'?'player2':'player1'
    start()
 }
 else{
    document.getElementById('turnPlayer').innerText="Empate!"
 }

}

