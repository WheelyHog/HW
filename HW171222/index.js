// 1  Реализовать алгоритм QuickSort, когда в качестве опорного элемента (pivot) мы выбираем не последний элемент в массиве, а случайный.



let arr = [5,82,1,43,18,33,14,68]
let count = 0;
let less = [];
let greater = [];


function quickSort(array) {
	if (array.length <=1) {
		return array
}
	let pivotIndex = Math.floor(array.length * Math.random());
  console.log(pivotIndex);
	let pivot = array[pivotIndex]
let less = [];
let greater = [];
	for (let i = 0; i < array.length; i++) {
	count += 1;
	if (i === pivotIndex)
	continue
	if (array[i] < pivot) {
	less.push(array[i])

} else {
	greater.push(array[i])

}
} return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(arr));
console.log(count);

//2 Дан массив строк. Нужно найти самый длинный общий префикс, используя парадигму DivideAndConquer.

// Пример, 
// arr = ["return","retard","reunion","rest"]
// prefix = "re"

// arr = ["cheer", "cheerful", "cheese"]
// prefix = "chee"

// arr = ["mirror", "nothing"]
// prefix = ""          

// let strA = "return";
// let strB = "retard";
// let strC = "reunion";
// let strD = "rest";

let strA = "cheer";
let strB = "cheerful";
let strC = "cheese";

let prefix = [];

let array = [strA, strB, strC];
let minLength = (array.map(item => item.length)).sort((x, y) => {return x-y})[0];

for (i =0; i< minLength; i++){
  if (strB[i] == strA[i] && strC[i] == strA[i]){
  prefix.push(strA[i]);
  } else break
}

console.log(array);
console.log(prefix);