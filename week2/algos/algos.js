// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

/* var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10]; */

function mergeDedupe(arr1, arr2) {
    let newArr = [];
    let empty1 = false;
    let empty2 = false;

    let x = 0;
    let y = 0;

    while (empty1 == false || empty2 == false){
        /*  console.log("x: " + arr1[x]);
        console.log("y: " + arr2[y]); */
        // If both arrays are empty break out to prevent pushing undefined to newArr
        if (arr1[x] == undefined && arr2[y] == undefined){
            empty1 = true;
            empty2 = true;
            break;
        }

        // If both array values are equal, check if it's in newArr, increment and add if necessary
        else if (arr1[x] == arr2[y]){
            if (newArr.includes(arr1[x]) == true){
                x++;
                y++;
            }
            else{
                newArr.push(arr1[x]);
                x++;
            }
        }

        // if arr1[x] is less, check if it exists already, add if not
        else if (arr1[x] < arr2[y]){
            if (newArr.includes(arr1[x]) == true){
                x++;
            }
            else{
                newArr.push(arr1[x]);
                x++;
            }
        }

        // if arr2[y] is less, check if it exists already, add if not
        else if (arr1[x] > arr2[y]){
            if (newArr.includes(arr2[y]) == true){
                y++;
            }
            else{
                newArr.push(arr2[y]);
                y++;
            }
        }

        // if arr1 empty, go through arr2, checking for dupes
        else if (arr1[x] == undefined){
            
            if (newArr.includes(arr2[y]) == true){
                y++;
            }
            else{
                newArr.push(arr2[y]);
                y++;
            }
            empty1 = true;
        }

        // if arr2 empty, go through arr1, checking for dupes
        else if (arr2[y] == undefined){
            
            if (newArr.includes(arr1[x]) == true){
                x++;
            }
            else{
                newArr.push(arr1[x]);
                x++;
            }
            empty2 = true;
        }
    }
    return newArr;

}


//mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
//mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

/* const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = []; */

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) { 

    let shortArr;
    let longArr;

    if (sortedA.length > sortedB.length){
        shortArr = sortedB;
        longArr = sortedA
    }
    else if (sortedB.length > sortedA.length){
        shortArr = sortedA;
        longArr = sortedB;
    }
    else {
        shortArr = sortedA;
        longArr = sortedB;
    }
    let newArr = [];
    

    for (let x = 0; x < shortArr.length; x++){
        let y = 0;
        while (shortArr[x] >= longArr[y]){
        if (shortArr[x] == longArr[y]){

            if (!newArr.includes(shortArr[x])){
            newArr.push(shortArr[x]);
            y++;
            }

            else y++;
        }

        else y++;
        }
    }
    return newArr;
}

//console.log(orderedIntersection(arrA1, arrB1));


/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurrences from one array.
  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arr1 = [1, 2, 2, 2, 7];
const arr2 = [2, 2, 6, 6, 7];
const expected1 = [1, 2, 2, 2, 6, 6, 7];

const arrA = [1, 2, 2, 2, 7, 10, 15, 20];
const arrB = [2, 2, 6, 6, 7];
const expected2 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n + m) linear, n = sortedA.length, m = sortedB.length because
 *  we may be pushing from only 1 array at a time while the other array's idx
 *  is staying in place. At worst, we push all items from 1 array when that
 *  array has all smaller items and then iterate through the 2nd array after.
 * - Space: O(n + m) where n = sortedA.length, m = sortedB.length because if
 *    there are no dupes all will be kept from both.
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */

function orderedMultisetUnion(sortedA, sortedB) {
    let i = 0, j = 0
    let newArr = [];

    // iterate two arrs
    while (i < sortedA.length || j < sortedB.length){

        if (sortedA[i] < sortedB[j]){
        newArr.push(sortedA[i])
        i += 1
        } else if (sortedA[i] > sortedB[j]){
        newArr.push(sortedB[j])
        j += 1
        } else {
        newArr.push(sortedA[i])
        i += 1
        j += 1
        }
    }

    /* if (sortedA.length > sortedB.length){
        while(i < sortedA.length){
            newArr.push(sortedA[i]);
            i++
        }
    } else{
        while(j < sortedB.length){
            newArr.push(sortedB[j]);
            j++
        }
    } */

    return newArr;
}

//console.log(orderedMultisetUnion(arrA, arrB))


// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) {
    let result = [];
    let group = [];
    let temp;

    for(let x = 0; x < arr.length; x++){
        group.push(arr[x]);
        temp = arr[x];

        for(let y = x + 1; y < arr.length; y++){
            if (temp > k){
                //console.log("over")
                group = [];
                break;
            }
            else if (temp == k){
                //console.log("added: " + group)
                result.push([...group]);
                group.push(arr[y]);
                temp += arr[y];
            }
            else{
                group.push(arr[y]);
                temp += arr[y];
            }
            
        }
    }
    return result;
}

//console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));


// findObjectsFilter(searchFor, items)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

function findObjectsFilter(search, items) { 
    const searchKeysArr = Object.keys(search);

    let x = items.filter(item => {
        for (const key of searchKeysArr){
            if(!item.hasOwnProperty(key) || item[key] !== search[key]){
                return false;
            }
        }
        return true;
    })
    return x;
}

//console.log(findObjectsFilter(searchFor, items))

// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

const students = [{
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
},
{
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false
},
{
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false
}
];

function findByIdAndUpdate(id, updatedVals, collection) { 
    // an array of keys
    updatedKeys = Object.keys(updatedVals)
    if (updatedKeys.length == 0) return null;
    for (let obj of collection){
        if (obj.id === id){
            for (let key of updatedKeys){
                if (obj.hasOwnProperty(key)){
                    obj[key] = updatedVals[key]
                }
            }
            return obj;
        }
    }
}

// Input: 3, { redBeltStatus: true }, students
findByIdAndUpdate(3, { redBeltStatus: true }, students)
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students)
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
findByIdAndUpdate(1, {}, students)
// Output: null

