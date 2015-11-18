//temp fn
var tile = function(row, column) {
    this.row = row;
    this.column = column;
};

var player = function(name, sign) {
    this.name = name;
    this.sign = sign;

};


var move = function(pos, sign){
  this.pos = pos;
  this.sign = sign;
};


var players = [];
players[0] = new player('Darshan' , 'X');
players[1] = new player('Kattu' , '0');

playerCounter = 0;


//init tiles array
var board = function() {
    this.tiles = [];


    this.init = function() {


        for (i = 0; i < 3; i++) {
            for (j = 0; j < 3; j++) {

                var tileObject = new tile(i, j);
                this.tiles.push(tileObject);
                console.log("tilepart??");
            }
        }
    };


    //draw tiles
    this.drawBoard = function() {

        var boardDiv = document.createElement('div');
        boardDiv.className = 'board';	
        boardDiv.setAttribute('id', 'board');
        
        // creating seperate row 3*3
        var row = 0;
        var rowDiv = [];
        for (var i = 0; i < 3; i++) {
            rowDiv[i] = document.createElement('div');
            rowDiv[i].className = 'row';
        }

        //for all 9 tiles
        for (var i = 0; i < this.tiles.length; i++) {
            var tileDiv = document.createElement('span');
            tileDiv.className = 'tile';
            tileDiv.setAttribute('id', 'tile[' + i + ']');
            tileDiv.setAttribute('data-row', this.tiles[i].row);
            tileDiv.setAttribute('data-col', this.tiles[i].col);

            rowDiv[row].appendChild(tileDiv);
            if (i == 2 || i == 5 || i == 8)
                row++;


            tileDiv.addEventListener('click', function(event) {
                /* lol...
                					if(player[playerCounter]){
                						drawDiv.innerHTML = '<span onclick="">X</span>';
                						playerCounter++;
                					}
                					else if(player[playerCounter]){
                						drawDiv.innerHTML = '<span onclick="">Y</span>';
                						playerCounter--;
                					}					
                  */
                  this.innerHTML = players[playerCounter].sign;
                  playerCounter = 1 - playerCounter;
                  //display turns
				document.getElementById("messages").innerHTML =players[playerCounter].name+", this is your turn "+playerCounter;

            });
            console.log("drawpart");
        }

        this.moves = [];
        this.moves.push = new move(i, player[playerCounter].sign);


        for (i = 0; i < 3; i++) {
        	//do
            document.body.appendChild(rowDiv[i]);
            boardDiv.appendChild(rowDiv[i]);
        }
        //do
        document.body.appendChild(boardDiv);
    };

   //displaying messages
  messageDiv = document.createElement('div');
  messageDiv.setAttribute('id','messages');
  messageDiv.innerHTML= players[0].name +', this is your turn';
  document.body.appendChild(messageDiv);

  for(i=0;i<9;i++){
  	
	  	if(this.moves[i].sign == this.moves[i+1].sign == this.moves[i+2].sign && this.moves[i+2].pos % 3 == 0){
	  		document.getElementById("messages").innerHTML =players[playerCounter].name+", you win "+playerCounter;
	  	}
  }


};

var myBoard = new board();
myBoard.init();
myBoard.drawBoard();

