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

selectionSort(myArr);