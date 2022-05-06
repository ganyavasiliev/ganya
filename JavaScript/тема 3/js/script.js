const arr1 = [4,6,16,73,5]
const arr2 = [1,-3, -2, 4, 10]

const arr3 = ['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy']

const result1 = document.querySelector('#resultFirstexecise1')
const result2 = document.querySelector('#resultFirstexecise2')
const result3 = document.querySelector('#resultFirstexecise3')
function sumArray(array) {
	if(!Array.isArray(array)) return;
	let sum=0;
	array.forEach(element => {
	  sum+=element;
	});
	return sum;
  };

function getAboveZero(array) {
	let arr = array.filter(function(numb){
		return numb >0;
	})
    return arr;
}

function getPonies(array) {
    let arr = array.find(function(numb){
		if(numb != 'AppleJack'){
			return false;
		}
	})
	return arr;
}

 result1.innerHTML = sumArray(arr1)
 result2.innerHTML = getAboveZero(arr2)
 result3.innerHTML = getPonies(arr3)