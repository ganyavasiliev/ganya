const arr1 = [4,6,16,73,5]
const arr2 = [1,-3, -2, 4, 10]

const result1 = document.querySelector('#resultFirstexecise1')
const result2 = document.querySelector('#resultFirstexecise2')

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

 result1.innerHTML = sumArray(arr1)
 result2.innerHTML = getAboveZero(arr2)
