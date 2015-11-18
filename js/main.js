//temp fn

var tile = function(row, column){
	this.row = row;
	this.column = column;
}

var player = function(name, sign){
	this.sign = sign;

}
var players =[];
players[0]= new player(prompt("Enter your player1 name?"));
players[1] = new player(prompt("Enter your player2 name?"));



var tile = function(){


	this.init = function(){
		var tiles = [];

		for(i = 0; i<3; i++){
		for(j=0; j<3; j++){
			
			var tileObject = new tile( i, j);
			tiles.push(tileObject);
			
		}
	}
	return tiles;

	this.drawBoard() = function(){



	  //testing winner here
	 for(i = 0; i<3; i++){
		for(j=0; j<3; j++){
			
		  function test(){
	  	if(tile(1,1)=="X" && tile(i+i,j+1)=="X" && tile()=="X"){

	  	}
	  		if(tile(1,1)=="Y" && tile(i+i,j+1)=="Y" && tile()=="Y")
	  
	  }
}