// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/

const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


function bubbleSort(nums){
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length - i - 1; j++){
            if (nums[j] > nums[j + 1]){
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]] //One line swap
            }
        }
    }
    return nums;
}

//console.log(bubbleSort(nums1))
//console.log(bubbleSort(nums2))
//console.log(bubbleSort(nums3))

/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items.
*/
const myArr = [3,2,9,5,1,4,8]

function selectionSort(arr){
    
    for(let i = 0; i < arr.length - 1; i++){
        let min = i;
        for(let y = i + 1; y < arr.length; y++){
            if (arr[y] < arr[min]){
                min = y;
            }
        }
        if(min != i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

//selectionSort(myArr);

/*
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/

function insertionSort(arr) {
    //iterate through whole array
    for (let x = 1; x < arr.length; x++) {
        //save current value at index x
        tempKey = arr[x];
        //check all values behind index x
        for (let y = x - 1; y >= 0; y--) {
            //if y value greater than tempkey
            if (arr[y] > tempKey) {
                //insert value of y in the index after it
                arr[y + 1] = arr[y];
                //if we reach start of array, x inserted at 0
                if (y == 0) {
                    arr[y] = tempKey;
                }
            }
            //if y value less than tempkey
            else {
                //insert tempkey into index after y
                arr[y + 1] = tempKey;
                //return to outer for loop, increment x, repeat process
                break;
            }
        }
    }
    return console.log(arr);
}

/* insertionSort([3,5,2,1,0])
insertionSort([3,0])
insertionSort([0])
insertionSort([])
insertionSort([1,2,3,4,5])
insertionSort([5,4,3,2,1])
insertionSort([5,4,0,2,1]) */

// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// mergeSortedArrays(left, right)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)


// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays()
function mergeSort(arr) {
    // base case
    if (arr.length === 1) {
        return arr;
    }

    let left = mergeSort(arr.slice(0, (Math.floor(arr.length / 2))));
    let right = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length));
    // recurse
    return mergeSortedArrays(left, right);
}

// return a new sorted array with all of the values of arr1 and arr2
// takes 2 sorted arrays and merges them together
// solve this first
function mergeSortedArrays(leftArr, rightArr) {
    let sortedArray = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftArr[leftIdx] || rightArr[rightIdx]){
        if (leftArr[leftIdx] < rightArr[rightIdx] || !rightArr[rightIdx]){
            sortedArray.push(leftArr[leftIdx]);
            leftIdx++;
        }
        else if (leftArr[leftIdx] > rightArr[rightIdx] || !leftArr[leftIdx]){
            sortedArray.push(rightArr[rightIdx]);
            rightIdx++;
        }
    }
    //console.log(sortedArray);
    return sortedArray;
}

// //steps:
//     1. create a mergeSortedArrays(leftArr, rightArr) function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to USE a new array
//     2. create mergeSort(arr) function to sort the provided array
//       - split the array into half and recursively merge the halves (run mergeSort on those 2 halves)
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a copy of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
console.log(mergeSort(arr));
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);