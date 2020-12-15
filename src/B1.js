// let n = Math.floor((Math.random()* 24) + 4);
// let inputNumber = Number(prompt('Nhập vào môt số bất kỳ lớn hơn hoặc bằng 0'));
let x;

do{
	n = Math.floor((Math.random()* 16) + 4);
}while(n % 2 != 0);

function findOppositeNumber(n, inputNumber){

	if(inputNumber < (n / 2)){
		x = inputNumber + (n/2);
		console.log(x);
	}
	else{
		x = inputNumber - (n/2);
		console.log(x);
	}
}

findOppositeNumber(10, 2);
findOppositeNumber(10, 6);

