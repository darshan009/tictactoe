//temp fn
/*
var tile = function(row, column){
	this.row = row;
	this.column = column;
};
*/
var player = function(name, sign){
	this.sign = sign;

};
var players =[];
players[0]= new player(prompt("Enter your player1 name?"));
players[1] = new player(prompt("Enter your player2 name?"));

playerCounter =0;

var tiles = [];
//init tiles
var tile = function(row, column){
	this.row = row;
	this.column = column;
	
	this.init = function(){
		

		for(i = 0; i<3; i++){
		for(j=0; j<3; j++){
			
			var tileObject = new tile( i, j);
			tiles.push(tileObject);
			console.log("tilepart??");
			}
		}
		return tiles;
	};


	//draw tiles
	this.drawBoard = function(){
		for(i=0;i<tiles.length;i++){
			div = document.createElement('div');
			div.className = 'tile';
			div.addEventListener('click', function(event){

					if(player[playerCounter == 0]){
						drawDiv.innerHTML = '<span onclick="">X</span>';
						playerCounter++;
					}
					else if(player[playerCounter == 1]){
						drawDiv.innerHTML = '<span onclick="">Y</span>';
						playerCounter--;
					}					
			});
					console.log("drawpart");
		}
		
		document.body.appendChild(div);
	};

};
	var myTiles = new tile(3,3);
	myTiles.init();
	myTiles.drawBoard();

	  //testing winner here
	  var test = function(){
		 for(i = 0; i<3; i++){
			for(j=0; j<3; j++){
			  	if(tile()=="X" && tile()=="X" && tile()=="X"){

		  	}
		  		if(tile()=="Y" && tile()=="Y" && tile()=="Y"){

	  		}
	  
	  }
}
};
