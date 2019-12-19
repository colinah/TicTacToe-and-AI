const width = 400;

const scl = 400/3

function TicTacToe() {
    this.board = [['','',''],['','',''],['','','']]
    this.boardLocations = [[{x:scl/2,y:scl/2},{x:scl+scl/2,y:scl/2},{x:scl*2+scl/2,y:scl/2}],
                        [{x:scl/2,y:scl+scl/2},{x:scl+scl/2,y:scl+scl/2},{x:scl*2+scl/2,y:scl+scl/2}],
                        [{x:scl/2,y:scl*2+scl/2},{x:scl+scl/2,y:2*scl+scl/2},{x:scl*2+scl/2,y:2*scl+scl/2}]];
    this.slots = 9;
    this.playersTurn = true;

    this.draw = () => {
        for(let i = 0; i < 3;i++){
            for(let j = 0; j < 3; j++){
                if(this.board[i][j] !== ''){
                    fill(0);
                    textAlign('center','center')
                    textSize(120)
                    text(this.board[i][j],this.boardLocations[i][j].x,this.boardLocations[i][j].y);
                }
            }
        }
    //draw
    }

    this.addMove = (location) => {
        for(let i = 0; i < 3;i++){
            for(let j = 0; j < 3; j++){
                if( dist(this.boardLocations[i][j].x,this.boardLocations[i][j].y,location.x,location.y) < scl/2 && this.board[i][j] === '' && this.playersTurn){
                    this.board[i][j] = 'O'
                    this.slots -= 1;
                    this.playersTurn = false
                }
            }
        }
    //addMove
    }
    this.checkWinner = () => {
        


        if(scoreAi >  3)
        }
    //checkWinner
    }
    this.AI = () => {

    }
//TicTacToe
}