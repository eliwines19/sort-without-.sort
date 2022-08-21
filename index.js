function mySort(array) {
    for (var a = 0; a < array.length; a++) {
        for (var b = 0; b < array.length; b++) {
            if (array[a] < array[b]) {
                var temp = array[a]
                array[a] = array[b]
                array[b] = temp
            }
        }
    }
    return array
}

var nums = [22,45,63,21,14,9,12,56,32]
console.log(mySort(nums))