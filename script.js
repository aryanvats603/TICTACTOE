// make array to hold data
let boardData=[
[0,0,0],[0,0,0],[0,0,0]]

;
const resultElement = document.getElementById("result");

// define game variables
let player=1;
let gameover=false;

// pull in cells from dom 
const cellElements = document.querySelectorAll(".cell");
console.log(cellElements);

// add event listeners 
  
cellElements.forEach((cell,index)=>{
    cell.addEventListener("click", ()=>{
        placeMarker(index);
    });
    });

  function placeMarker(index){
    // row n col by using index
let col= index%3;

let row= (index-col)/3;
if(boardData[row][col]==0 && gameover==false){boardData[row][col]=player;
    player *= -1;
    drawMarkers();
// check who won the game
checkResult();}

  }


  function drawMarkers() {
    for(let row=0; row<3;row++){
        for(let col=0; col<3;col++){ 
            if(boardData[row][col]==1){ 
                cellElements[(row*3)+col].classList.add("cross");
             }
             else if(boardData[row][col]==-1){
                cellElements[(row*3)+col].classList.add("circle");
             
             }
        }

    }
  }

  function checkResult(){
    // check rows and columns
    for(let i=0;i<3;i++){ 
        let rowSum=boardData[i][0]+boardData[i][1]+boardData[i][2];
        let colSum=boardData[0][i]+boardData[1][i]+boardData[2][i];

        if(rowSum==3 || colSum==3){ 
        endgame(1);
        return;
    }
    else if(rowSum== -3|| colSum== -3){
      endgame(2);
      return;
    }
    }
    let diagonal1Sum=boardData[0][0]+boardData[1][1]+boardData[2][2];
    let diagonal2Sum=boardData[0][2]+boardData[1][1]+boardData[2][0];
    
    if(diagonal1Sum==3 || diagonal2Sum==3)
    {endgame(1);
        return;
}
else if(diagonal1Sum== -3|| diagonal2Sum== -3){
    endgame(2);
    return;
}

// check for tie
if(boardData[0].indexOf(0)== -1 && boardData[1].indexOf(0)== -1 && boardData[2].indexOf(0)== -1){
    console.log("tie");
    endgame(0);
    return;
}


 }

 function endgame(winner){
gameover=true;

if(winner==0){
    console.log("it's a TIE");
    resultElement.innerHTML = "TIE";
}
else{ 
    console.log(` player number ${winner} wins`);
    resultElement.innerHTML = ` Player number ${winner} wins`;
}
 }


//  restart game
const restartbutton = document.getElementById("restart");
// add event listener
restartbutton.addEventListener("click",function(){
    // reset game variables
    boardData=[
        [0,0,0],[0,0,0],[0,0,0]]
        
        ;
        
        
        // define game variables
        player=1;
    gameover=false;

    // reset game board
    cellElements.forEach(cell=>{
    cell.classList.remove("cross","circle");
    })
    resultElement.innerHTML="";
});