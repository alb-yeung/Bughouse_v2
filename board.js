var board1 = $('#board1')[0];
var ctx1 = board1.getContext("2d");
var board2 = $('#board2')[0];
var ctx2 = board2.getContext("2d");

var makeLines = function(ctx){
	for (i=0;i<9;i++){
		ctx.beginPath();
		ctx.lineWidth="1";
		ctx.strokeStyle="#000000";
		ctx.moveTo(0,50*i);
		ctx.lineTo(400,50*i);
		ctx.stroke();
		ctx.moveTo(50*i,0);
		ctx.lineTo(50*i,400);
		ctx.closePath();
		ctx.stroke();
	}
};

var makeGrid = function(){
	ctx=ctx1;
	ctx.font="40px Verdana";
	ctx.fillText("A",10,440);
	ctx.fillText("B",60,440);
	ctx.fillText("C",110,440);
	ctx.fillText("D",160,440);
	ctx.fillText("E",210,440);
	ctx.fillText("F",260,440);
	ctx.fillText("G",310,440);
	ctx.fillText("H",360,440);
	ctx.fillText("8",410,40);
	ctx.fillText("7",410,90);
	ctx.fillText("6",410,140);
	ctx.fillText("5",410,190);
	ctx.fillText("4",410,240);
	ctx.fillText("3",410,290);
	ctx.fillText("2",410,340);
	ctx.fillText("1",410,390);	
	ctx=ctx2;
	ctx.font="40px Verdana";
	ctx.fillText("H",10,440);
	ctx.fillText("G",60,440);
	ctx.fillText("F",110,440);
	ctx.fillText("E",160,440);
	ctx.fillText("D",210,440);
	ctx.fillText("C",260,440);
	ctx.fillText("B",310,440);
	ctx.fillText("A",360,440);
	ctx.fillText("1",410,40);
	ctx.fillText("2",410,90);
	ctx.fillText("3",410,140);
	ctx.fillText("4",410,190);
	ctx.fillText("5",410,240);
	ctx.fillText("6",410,290);
	ctx.fillText("7",410,340);
	ctx.fillText("8",410,390);
};

var makeSquares=function(ctx){
	ctx.fillStyle="#FF9999"
    for (var i = 1;i < 400;i+=50){
        if (i%100==1){
            for (var j=51;j < 400;j+=100){
                ctx.fillRect(i,j,48,48);
            }
        }else{
            for (var j=1;j < 400;j+=100){
                ctx.fillRect(i,j,48,48);
            }
        }
    }
};

makeLines(ctx1);
makeLines(ctx2);
makeGrid();
makeSquares(ctx1);
makeSquares(ctx2);
console.log(board1);