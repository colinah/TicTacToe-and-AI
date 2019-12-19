const width = 400;

const scl = 400/3

function TTT() {
    this.board = [['','',''],['','',''],['','','']]
    this.boardLocations = [[{x:scl/2,y:scl/2},{x:scl+scl/2,y:scl/2},{x:scl*2+scl/2,y:scl/2}],
                        [{x:scl/2,y:scl+scl/2},{x:scl+scl/2,y:scl+scl/2},{x:scl*2+scl/2,y:scl+scl/2}],
                        [{x:scl/2,y:scl*2+scl/2},{x:scl+scl/2,y:2*scl+scl/2},{x:scl*2+scl/2,y:2*scl+scl/2}]];

    this.draw = () => {
        for(let i = 0; i < 3;i++){
            for(let j = 0; j < 3; j++){

            }
        }
    }




}