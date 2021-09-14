function quicksort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[0];
    const less = arr.slice(1).filter(el => el <= pivot);
    const greater = arr.slice(1).filter(el => el > pivot);

    return quicksort(less).concat(pivot, quicksort(greater));
}

console.log(quicksort([10, 5, 2, 3]));




function QuickSort_R(arr: number[]) {
  // the choosing of the pivot will be randomize
  //Base Case
  if (arr.length < 2) return arr;
  //recrusive
  else {

    // choosing randomly the pivot from the arrays.
      
    let pivotindex = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivotindex];

    let less = arr.filter((x) => x <= pivot).slice(0);
    let high = arr.filter((x) => x > pivot).slice(0);

    return QuickSort_R(less).concat(QuickSort_A(high));
  }
}

console.log(QuickSort_R([3, 1, 5, 9, 7, 5, 4, 8, 34, 7, 22]));


