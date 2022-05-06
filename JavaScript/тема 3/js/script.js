const result1 = document.querySelector('#resultFirstexecise1')
const result2 = document.querySelector('#resultFirstexecise2')
const result3 = document.querySelector('#resultFirstexecise3')
const result4 = document.querySelector('#resultFirstexecise4')
const result5 = document.querySelector('#resultFirstexecise5')
const result6 = document.querySelector('#resultFirstexecise6')
const result8 = document.querySelector('#resultFirstexecise8')
const result9 = document.querySelector('#resultFirstexecise9')
const result10 = document.querySelector('#resultFirstexecise10')

//1
const arr1 = [4,6,16,73,5]

function sumArray(array) {
	if(!Array.isArray(array)) return;
	let sum=0;
	array.forEach(element => {
	  sum+=element;
	});
	return sum;
  };
  result1.innerHTML = sumArray(arr1)

//2

const arr2 = [1,-3, -2, 4, 10]
function getAboveZero(array) {
	let arr = array.filter(function(numb){
		return numb >0;
	})
    return arr;
}

result2.innerHTML = getAboveZero(arr2)


//3
const arr3 = ['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy']
const arr3_1 = 'AppleJack'

function getPonies(array1, array2){

	let a = array1.includes(array2);
	if (a == true)
		return array2;
	else 
		return a;
}

 result3.innerHTML = getPonies(arr3, arr3_1)

 //4

 const arr4 = ["0xaea0", "0x8f80", "0xf3ad", "0x17ec"]
 const arr4_1 = 0x9e0a

 function isTxIncluded(array1, array2){
	let a = array1.includes(array2);
	return a;
}

result4.innerHTML = getPonies(arr4, arr4_1)

//5

const arr5 = ["Moscow", "Coding", "aaaSchool"]

function getSizes(array){
	let a = array.map(function(numb){
		return numb.length;
	})
	return a;
}

result5.innerHTML = getSizes(arr5)

//6

const arr6 = ["Moscow", "never", "sleep"]

function getWithSpaces(array){
	let sum = 0;
	array.forEach(function(s){sum = sum + s.length})
	let a = [array.join(" "), sum];
	return a;
}

result6.innerHTML = getWithSpaces(arr6)

//8

const arr8 = {title: "Code Geass", episodes: 25}

function getEpisodes(array){
	return `Аниме ${array.title} включает ${array.episodes} серий`;
}

result8.innerHTML = getEpisodes(arr8)

//9

const arr9 = 2

const triple = (x) => {
	return parseInt(x)*3;
}

result9.innerHTML = triple(arr9)

//10

const arr10 = [5.4, 8.1, 6.3, 4.9]

const getAvgGlucose = (check) => {
	let sum = 0;
	check.forEach(num => {
		sum = sum + num;
	})
	a = check.length;
	return ((sum/a).toFixed(1));
}

result10.innerHTML = getAvgGlucose(arr10)