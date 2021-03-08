const arr = [2, 3, 1, 5, 4, 7, 19, 10];
const num = 10;

const arrSum = (arr, num) => {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (num === sum) {
        outputArr.push({ first: arr[i], second:arr[j]  });
      }
    }
  }
  return outputArr;
}

const invokeFun = arrSum(arr, num);
console.log("invokeFun", invokeFun);
