//temp fn

var tile = function(row, column){
	this.row = row;
	this.column = column;
};

var player = function(name, sign){
	this.sign = sign;

};
var players =[];
players[0]= new player(prompt("Enter your player1 name?"));
players[1] = new player(prompt("Enter your player2 name?"));

playerCounter =0;

var tile = function(){

	//init tiles
	this.init = function(){
		var tiles = [];

		for(i = 0; i<3; i++){
		for(j=0; j<3; j++){
			
			var tileObject = new tile( i, j);
			tiles.push(tileObject);
			
			}
		}
		return tiles;
	};
	
	//draw tiles
	this.drawBoard = function(){
		for(i=0;i<tiles.length;i++){
			tileDiv = document.createElement('div');
			tile.div.className = 'tile';
			tile.addEventlistener('click', function(event){

					if(player[0])
						drawTileDiv.innerHTML = '</span><span class="remove" onclick="cartObject.removeFromCart('+i+')">X</span>';
					else if(player[1])
						drawTileDiv.innerHTML = '</span><span class="remove" onclick="cartObject.removeFromCart('+i+')">Y</span>';
					
			});
		}
		document.body.appendChild(tileDiv);
	};

};
	

	  //testing winner here
	 for(i = 0; i<3; i++){
		for(j=0; j<3; j++){
			
		  var test = function(){
	  	if(tile(1,1)=="X" && tile(i+i,j+1)=="X" && tile()=="X"){

	  	}
	  		if(tile(1,1)=="Y" && tile(i+i,j+1)=="Y" && tile()=="Y"){

	  		}
	  
	  };
}
}
