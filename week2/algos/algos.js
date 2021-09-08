// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

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

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

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