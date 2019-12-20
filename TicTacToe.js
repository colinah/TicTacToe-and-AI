const width = 400;

const scl = 400/3

function TicTacToe() {
    this.board = [[0,0,0],[0,0,0],[0,0,0]]
    this.boardLocations = [[{x:scl/2,y:scl/2},{x:scl+scl/2,y:scl/2},{x:scl*2+scl/2,y:scl/2}],
                        [{x:scl/2,y:scl+scl/2},{x:scl+scl/2,y:scl+scl/2},{x:scl*2+scl/2,y:scl+scl/2}],
                        [{x:scl/2,y:scl*2+scl/2},{x:scl+scl/2,y:2*scl+scl/2},{x:scl*2+scl/2,y:2*scl+scl/2}]];
    this.slots = 9;
    this.playersTurn = true;

    this.draw = () => {
        let letter
        for(let i = 0; i < 3;i++){
            for(let j = 0; j < 3; j++){
                if(this.board[i][j] !== ''){
                    fill(0);
                    textAlign('center','center')
                    textSize(120)
                    this.board[i][j] === 1 ? letter = 'X' : this.board[i][j] === -1 ? letter = 'O' : letter = '';
                    text(letter,this.boardLocations[i][j].x,this.boardLocations[i][j].y);
                }
            }
        }    
    } //draw

    this.playerMove = (location) => {
        for(let i = 0; i < 3;i++){
            for(let j = 0; j < 3; j++){
                if( dist(this.boardLocations[i][j].x,this.boardLocations[i][j].y,location.x,location.y) < scl/2 && this.board[i][j] === 0 && this.playersTurn){
                    this.board[i][j] = -1
                    this.slots -= 1;
                    this.playersTurn = false;
                    setTimeout(this.AiMove, 500);
                }
            }
        }
   
    }  //playerMove

    this.AiMove = () => {
        let move = this.bestMoveAi(this.board);
        this.board[move.x][move.y] = 1;
        this.playersTurn = true;
    } //AiMove

    this.bestMoveAi = (board) => {
        let bestScore = -3;
        let playerWin = false;
        let currentScore = -3;
        let location = {x: null, y:null}
        let Win 
        //Check Columns and rows
        for(let i = 0; i < 3;i++){
            for(let j = 0; j < 3; j++){
                if(this.board[i][j] === 0 && !playerWin){
                    this.board[i][j] = 1;
                    currentScore = Math.max(...this.checkScore(board));
                    bestScore < currentScore ? (bestScore = currentScore, location.x = i, location.y = j): null
                    this.board[i][j] = 0
                }
            }
        }
        if(bestScore === 3){
            return location
        }
        //Check for losing scenario
        currentScore = 3;
        for(let i = 0; i < 3;i++){
            for(let j = 0; j < 3; j++){
                if(this.board[i][j] === 0 && !playerWin){
                    this.board[i][j] = -1;
                    currentScore = Math.min(...this.checkScore(board));
                    currentScore === -3 ? (worstScore = currentScore, location.x = i, location.y = j): null
                    this.board[i][j] = 0
                }
            }
        }
        return location
    } //bestMove
    this.bestMovePlayer = (board) => {

    
    } //bestMove

    this.firstMove = () => {
        this.board[Math.floor(Math.random()*3)][Math.floor(Math.random()*3)] = 1;
    }
    

    this.checkWinner = () => {
        if(this.slots = 0){
            console.log('Tie')
        } else {
           if(Math.max(...this.checkScore(this.board)) === 3){
               console.log('AI Wins')
           }
           if(Math.min(...this.checkScore(this.board)) === -3){
               console.log('You Win')
           }
        }
    } //checkWinner

    this.checkScore = (board) => {
        let colScore = 0;
        let rowScore = 0;
        let maxColScore = 0;
        let maxRowScore = 0;
        let minColScore = 0;
        let minRowScore = 0;
        //Look for max & min score in rows and colums
        for(let i = 0; i < 3; i++){
            colScore = 0;
            rowScore = 0;
            for(let j = 0; j < 3; j++){
                rowScore += board[i][j]
                colScore += board[j][i]
            }
            rowScore > maxRowScore ? maxRowScore = rowScore : null;
            rowScore < minRowScore ? minRowScore = rowScore : null;
            colScore > maxColScore ? maxColScore = colScore : null;
            colScore < minColScore ? minColScore = colScore : null;
        }
        //Check Diagnols
        let diagonal1 = board[0][0] + board [1][1] + board[2][2];
        let diagonal2 = board[2][0] + board [1][1] + board[0][2];

        return [maxRowScore,minRowScore,maxColScore,minColScore, Math.max(diagonal1,diagonal2), Math.min(diagonal1,diagonal2)] 
    } //checkScore
} //TicTacToe