/*
function fizzbuzz(num) {
  for(i = 0; i <= num; i++) {

    if ((num % 3 === 0) && (num % 5 === 0)) {
      return 'fizzbuzz';
    } else if (num % 3 === 0) {
      return 'fizz';
    } else if (num % 5 === 0) {
      return 'buzz';
    } else {
      return num;
    }
  }

}

We sorted it by creating an empty array and then pushing the value output to the array. Then for checking it you check the index of the array.

console.log(fizzbuzz(5));
*/
function fizzbuzz(num) {
  let numberArray = [];
  for(i = 1; i <= num; i++) {

    if((i % 3 === 0) && (i % 5 === 0)) {
      numberArray.push("fizzbuzz");
    } else if(i % 3 === 0) {
      numberArray.push("fizz");
    } else if(i % 5 === 0) {
      numberArray.push("buzz");
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
}

console.log(fizzbuzz(2));
