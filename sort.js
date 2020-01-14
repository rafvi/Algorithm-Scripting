function sort(arr) {
  arr.sort(function(a, b){
    return a - b;
  });
  
  return arr;
}

sort([5,8,2,5,9,2]); // Array(6) [ 2, 2, 5, 5, 8, 9 ]
