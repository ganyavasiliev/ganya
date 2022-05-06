const result1 = document.querySelector('#resultFirstexecise1')
const result2 = document.querySelector('#resultFirstexecise2')
const result3 = document.querySelector('#resultFirstexecise3')
const result4 = document.querySelector('#resultFirstexecise4')
const result5 = document.querySelector('#resultFirstexecise5')

//1

const arr1 = 18;

function getAge(a){
	return a + 1;
}

result1.innerHTML = getAge(arr1)

//2

const arr2_1 = 10;
const arr2_2 = 3;

function getRemainder(a, b){
	return a % b;
}

result2.innerHTML = getRemainder(arr2_1, arr2_2)

//3

const arr3 = 20;

function faceControl(a){
	if(a>=18){
		return "Welcome";
	}else{
		return "Отказ"
	}
}

result3.innerHTML = faceControl(arr3)

//4

const arr4 = document.querySelector('#inputNumb4');

function getNextAge(a){
	if(a==""){
		return 0;
	}else{
		return a + 1;
	}
}

arr4.addEventListener("input",()=>{
	result4.textContent = getNextAge(arr4.value)
})

//5

const arr5 = 120;

function canRide(a){
	return a >= 140;
}

result5.innerHTML = canRide(arr5)