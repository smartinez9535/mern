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

insertionSort([3,5,2,1,0])
insertionSort([3,0])
insertionSort([0])
insertionSort([])
insertionSort([1,2,3,4,5])
insertionSort([5,4,3,2,1])
insertionSort([5,4,0,2,1])