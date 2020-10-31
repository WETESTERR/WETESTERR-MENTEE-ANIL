// uncomment to execute the code-block.


//For practice: To take the number from string
// function sum(txt) {
//     var s = 0
//     var reg = txt.match(/\d/g);
//     reg = reg.join("");
//     var sp = reg.split("")
//     for (var i = 0; i <= sp.length - 1; i++) {
//         s = s + parseInt(sp[i])
//     }
//     console.log(s)
// }
// sum("ewfdfefd322")

//Switch
// var a = 2
// switch (a) {
//     case 4:
//         console.log("Four")
//     case 2:
//         console.log("Two")
//     case 3:
//         console.log("Three")
//     default:
//         console.log("Default value")
// }


// If-else block
// var a = 0
// if (a > 3) {
//     console.log("hello")
//     if (a == 0) {
//         console.log("Zero")
//     } else {
//         console.log("No zero")
//     }
// } else {
//     console.log("No hello")
// }






// Quick Sort
// function quickSort(origArray) {
//     if (origArray.length <= 1) {
//         return origArray
//     } else {
//         var left = []
//         var right = []
//         var newArray = []
//         var pivot = origArray.pop()
//         var length = origArray.length
//         for (var i = 0; i < length; i++) {
//             if (origArray[i] <= pivot) {
//                 left.push(origArray[i])
//             } else {
//                 right.push(origArray[i])
//             }
//         }
//         return newArray.concat(quickSort(left), pivot, quickSort(right))
//     }
// }
// var array = [3, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log("original array: " + array)
// var sortedArray = quickSort(array)
// console.log("sorted array: " + sortedArray)

//Bubble sort
// function swap(input, a, b) {
//     var temp = input[a]
//     input[a] = input[b]
//     input[b] = temp
// }

// function sort(arr) {
//     var len = arr.length - 1
//     for (var i = 0; i <= len; i++) {
//         for (var j = 0; j <= len; j++) {
//             if (arr[i] > arr[j]) {
//                 swap(arr, i, j)
//             }
//         }
//     } console.log(arr)
// }

// sort([5, 4, 8, 2])

//split
// var str = "anil"
// var arr = str.split("")
// console.log(typeof arr)
// console.log(typeof arr.join(""))


//Array multidimension

// var a = ["anil"]
// console.log(a.length)



// var a = [5, 1, [8, "a", 6], 78]
// console.log(a[2][1])

//Array functions
// var arr = [5, 1, 8, 7]
// arr.push(10)
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)
// arr.unshift(45)
// console.log(arr)



// var arr = []
// var arr = new Array












//short circuit
// false || console.log("hello")


// var a = 10
// console.log(!a)

// var a = 10
// var b = undefined
// console.log(typeof a, typeof b)
// console.log(b && a)
// console.log(a && b)

// var a = 10
// var b = ""
// console.log(typeof a, typeof b)
// console.log(b || a || null)
// console.log(a || b || 50)