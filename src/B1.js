let n = Math.floor((Math.random()* 24) + 4);
let inputNumber = Number(prompt('Nhập vào môt số bất kỳ lớn hơn hoặc bằng 0'));
let x;

do{
	n = Math.floor((Math.random()* 16) + 4);
}while(n % 2 != 0);

function findOppositeNumber(n, inputNumber){
	if(inputNumber >= 0 && inputNumber <= n-1){
		x = 180 / (360 / n) + inputNumber;
		console.log(x);
		console.log('n ' + n);
	}
	else{
		console.log('bad');
	}
}

findOppositeNumber(10, 2);

